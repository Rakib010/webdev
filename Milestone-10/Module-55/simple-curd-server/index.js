const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json()); // client side body er jonno

//hossainrokib55
//qRgv3FQ7reCMdzo7

const uri =
  "mongodb+srv://hossainrokib55:qRgv3FQ7reCMdzo7@cluster0.854qt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    /*  */
    const database = client.db("usersDB");
    const users = database.collection("users");

    /* all user pawa jabe get diye (find inside parameter use kora jay)*/
    app.get("/users", async (req, res) => {
      const cursor = users.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    /* single user read   */
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await users.findOne(query);
      res.send(user);
    });

    /* get data form client side */
    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(user);

      /*send data to database (new data create ) */
      const result = await users.insertOne(user);
      res.send(result);
    });

    /* receive id from client side  */
    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      console.log(id,user);

      /* client theke pawa data  set database */
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email,
        },
      };
      const result = await users.updateOne(filter, updatedUser, options);
      res.send(result)
    });

    /* delete from server side (database)  */
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log("please delete from database", id);

      // Query for a id bcz na hoy ekbare sob gula delete hoye jabe (single delete er jonno id dore nilam)
      const query = { _id: new ObjectId(id) };
      const result = await users.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);

app.get("/", (req, res) => {
  res.send("Simple curd is running");
});

app.listen(port, () => {
  console.log(`Curd is Running on port: ${port}`);
});
