const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 4000;

const uri =
  "mongodb+srv://curd-101:ml9f0kgqwKvBy9NV@cluster0.wfmwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

/* middleware */
app.use(express.json());
app.use(cors());

// custom middleware
const logger = (req, res, next) => {
  console.log("Custom middleware");
};

//curd-101
//ml9f0kgqwKvBy9NV

/* connect database */
async function Main() {
  try {
    await client.connect();

    /* here write all code  */
    app.post("/add-data", (req, res) => {
      res.send();
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  }
}
Main();

/* http://localhost:4000/ */
app.get("/home", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("server running");
});
