// import
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

// app sob incoming request gula ke handle kore
const app = express();

/* middleware */
app.use(cors());
app.use(express.json());

/* mongodb connect manual */
const client = new MongoClient(
  "mongodb+srv://LearnBasicMongo:Wmw2HCSfp15rKW3F@cluster0.854qt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const run = async () => {
  await client.connect();

  /* Express hocche database er name, 
   R learn folder store hoi 
  */
  const db = client.db("Express");
  const learnCollection = db.collection("Learn");

  /* insert value in database */
  const result = await learnCollection.insertOne({
    name: "Rakib Hossen",
    age: 25,
  });
  // console.log(result);

  /* find insert list how many data in database */
  /* limit 1 hocche 1tar besi value dibe  na databse theke   */
  const cursor = learnCollection.find().limit(1);
  const res = await cursor.toArray();
  console.log(res);

  /* updatedOne er kaj hocche ekra specific document update kora */
  const up = await learnCollection.updateOne(
    { age: 25 },
    { $set: { name: "20 age" } }
  );
  console.log(up);

  /*delete from database */
  const de = await learnCollection.deleteOne({ age: { $gt: 10 } });
  console.log(de);

  console.log("Database is connected");
};
run();

app.get("/", (req, res) => {
  res.send("server is working");
});

app.listen(3000, () => {
  console.log("application is running");
});
