require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://erratic-dinosaurs.surge.sh"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// validation jwt
const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  // verify the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    // if error
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    //
    req.user = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.854qt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    // jobs related api
    const jobsCollection = client.db("JobsNews").collection("jobs");
    const jobsApplication = client.db("JobsNews").collection("job_application");

    // Auth related APIs
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "5h",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    //logout
    app.post("/logout", (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    // get data from database
    app.get("/jobs", async (req, res) => {
      const email = req.query.email;
      const sort = req.query?.sort;
      const search = req.query?.search;
      const min = req.query?.min;
      const max = req.query?.max;

      let query = {};
      let sortQuery = {};

      if (email) {
        query = { hr_email: email };
      }
      //sort()
      if (sort == "true") {
        sortQuery = { salaryRange: -1 };
      }
      //search
      if (search) {
        query.location = { $regex: search, $options: "i" };
      }
      // min,max salary ranges wise search
      if (min && max) {
        query = {
          ...query,
          "salaryRange.min": { $gte: parseInt(min) },
          "salaryRange.max": { $lte: parseInt(max) },
        };
      }

      //
      const cursor = jobsCollection.find(query).sort(sortQuery);
      const result = await cursor.toArray();
      res.send(result);
    });

    //specif id dore data load korar jonno api
    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });

    // job application api
    app.post("/job-application", async (req, res) => {
      const application = req.body;
      const result = await jobsApplication.insertOne(application);

      // not the best way (use aggregate)
      const id = application.job_id;
      const query = { _id: new ObjectId(id) };
      const job = await jobsCollection.findOne(query);
      //console.log(job);
      let newCount = 0;
      if (job.applicationCount) {
        newCount = job.applicationCount + 1;
      } else {
        newCount = 1;
      }
      // update the job info
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          applicationCount: newCount,
        },
      };
      const updateResult = await jobsCollection.updateOne(filter, updateDoc);

      res.send(result);
    });

    // user application job (query)
    app.get("/job-application", verifyToken, async (req, res) => {
      const email = req.query.email;
      const query = { applicant_email: email };

      // console.log("cookies", req.cookies)
      if (req.user.email !== req.query.email) {
        return res.status(403).send({ message: "forbidden access" });
      }
      /*  if (req.user.email !== req.query.email) {
        return res.status(403).send({ message: "forbidden access" });
      } */
      //

      const result = await jobsApplication.find(query).toArray();
      // aggregate data
      for (const application of result) {
        const query = { _id: new ObjectId(application.job_id) };
        const job = await jobsCollection.findOne(query);
        if (job) {
          application.title = job.title;
          application.location = job.location;
          application.company = job.company;
          application.company_logo = job.company_logo;
        }
      }
      res.send(result);
    });

    // add job api
    app.post("/jobs", async (req, res) => {
      const newJob = req.body;
      const result = await jobsCollection.insertOne(newJob);
      res.send(result);
    });

    //
    app.get("/job-application/jobs/:job_id", async (req, res) => {
      const jobId = req.params.job_id;
      const query = { job_id: jobId };
      const result = await jobsApplication.find(query).toArray();
      res.send(result);
    });

    //view application updated
    app.patch("/job-application/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: data.status,
        },
      };
      const result = await jobsCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Job is falling from the sky");
});

app.listen(port, () => {
  console.log(`job is waiting at: ${port}`);
});
