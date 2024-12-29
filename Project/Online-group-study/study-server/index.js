require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://majestic-degree.surge.sh",
  ],
  credentials: true,
  optionalSuccessStatus: 200,
};

const app = express();
const port = process.env.PORT || 9000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.bmcuq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//verify token
const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).send({ message: "unauthorized access" });
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
  });

  next();
};

async function run() {
  try {
    //await client.connect();

    const db = client.db("assignment-collection");
    const assignmentCollection = db.collection("assignments");
    const submissionCollection = db.collection("submission");

    // generate jwt
    app.post("/jwt", async (req, res) => {
      const email = req.body;
      // create token
      const token = jwt.sign(email, process.env.SECRET_KEY, {
        expiresIn: "10h",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    // logout jwt
    app.get("/logoutJwt", async (req, res) => {
      res
        .clearCookie("token", {
          maxAge: 0,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    //create Assignment
    app.post("/createAssignment", async (req, res) => {
      const data = req.body;
      const result = await assignmentCollection.insertOne(data);
      res.send(result);
    });

    // get assignment data
    /* app.get("/allAssignment", async (req, res) => {
      const result = await assignmentCollection.find().toArray();
      res.send(result);
    }); */

    // get data specific id
    app.get("/allAssignment/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await assignmentCollection.findOne(query);
      res.send(result);
    });

    // delete assignment if user create specific  assignment
    app.delete("/deleteAssignment/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await assignmentCollection.deleteOne(query);
      res.send(result);
    });

    // update Assignment
    app.patch("/updateAssignment/:id", async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      const updated = {
        $set: data,
      };
      const query = { _id: new ObjectId(id) };
      const result = await assignmentCollection.updateOne(query, updated);
      res.send(result);
    });

    // Assignment submission form
    app.post("/submissionAssignment", async (req, res) => {
      const data = req.body;
      const result = await submissionCollection.insertOne(data);
      res.send(result);
    });

    // my submitted assignment specific user (email)
    app.get("/submission/:email", verifyToken, async (req, res) => {
      const decodedEmail = req.user?.email;
      const email = req.params.email;

      //verify user
      if (decodedEmail !== email)
        return res.status(401).send({ message: "unauthorized access" });

      const query = { email: email };
      const result = await submissionCollection.find(query).toArray();
      res.send(result);
    });

    // filter & search function
    app.get("/Assignments", async (req, res) => {
      const filter = req.query.filter;
      const search = req.query.search;
      let query = {};
      /*  let query = {
        title: {
          $regex: search,
          $options: "i",
        },
      }; */
      if (search) {
        query.title = { $regex: search, $options: "i" };
      }

      if (filter) {
        query.level = filter;
      }
      const result = await assignmentCollection.find(query).toArray();
      res.send(result);
    });

    // pending assignments ()
    app.get("/pendingAssignments", verifyToken, async (req, res) => {
      const query = { status: "Pending" };
      const result = await submissionCollection.find(query).toArray();
      res.send(result);
    });

    // update status & mark
    app.patch("/submissionUpdate/:id", async (req, res) => {
      const id = req.params.id;
      const { mark, feedback, status } = req.body;
      //console.log("body", req.body);
      const filter = { _id: new ObjectId(id) };
      const update = {
        $set: {
          mark,
          feedback,
          status,
        },
      };
      const result = await submissionCollection.updateOne(filter, update);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Group study server is running");
});
app.listen(port, () => {
  console.log(`group study server is running on ${port}`);
});
