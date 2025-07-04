require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// server connect to database
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.wfmwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    //await client.connect();

    //save data database
    const gymSchedule = client.db("gym-schedule").collection("schedule");
    /*  const userCollection = client.db("gym-schedule").collection("users"); */

    // data post of database (data post er jonno api create)
    app.post("/schedule", async (req, res) => {
      const data = req.body;
      const result = await gymSchedule.insertOne(data);
      res.send(result);
    });

    // data get form data
    app.get("/schedule", async (req, res) => {
      const { searchParams } = req.query;
      let option = {};
      if (searchParams) {
        // Perform a case-insensitive search on the "title" field
        option = { title: { $regex: searchParams, $options: "i" } };
      }

      const result = await gymSchedule.find(option).toArray(); 
      res.send(result);
    });

    //dynamic way delete
    app.delete("/schedule/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await gymSchedule.deleteOne(query);
      res.send(result);
    });

    // updated specific data ()
    app.get("/schedule/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await gymSchedule.findOne(query);
      res.send(result);
    });

    // updated insert value
    app.patch("/schedule/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const query = { _id: new ObjectId(id) };
      /* left side jei name gula ta hocche datebase er name gula - title,day ... */
      const updated = {
        $set: {
          title: data?.title,
          day: data?.day,
          date: data?.date,
          time: data?.time,
        },
      };
      //database new value insert korsi seta update kora lagbe
      const result = await gymSchedule.updateOne(query, updated /*options*/);
      res.send(result);
    });

    //update status
    app.patch("/status/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const query = { _id: new ObjectId(id) };
      const updated = {
        $set: {
          isCompleted: true,
        },
      };
      const result = await gymSchedule.updateOne(query, updated);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    /* await client.close(); */
  }
}
run();

app.get("/", (req, res) => {
  res.send("Gym Server running");
});

app.listen(port, () => {
  console.log(`GymRunning Server ${port}`);
});
