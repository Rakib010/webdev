require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster01.unpag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// middleware
//{ origin: ["localhost url", "https://frightened-orange.surge.sh"] }
app.use(cors());
app.use(express.json());

async function run() {
  try {
    //await client.connect();

    const campaignCollection = client
      .db("campaign-collection")
      .collection("campaign");

    const donateCollection = client
      .db("donate-collection")
      .collection("donate");

    // jwt
    app.post("/jwt", async (req, res) => {
      const email = req.body;
      // create token
      const token = jwt.sign(email, process.env.SECRET_KEY, {
        expiresIn: "30d",
      });
      res.send(token);
    });

    // post data
    app.post("/addCampaign", async (req, res) => {
      const data = req.body;
      const result = await campaignCollection.insertOne(data);
      res.send(result);
    });

    //get data
    app.get("/addCampaign", async (req, res) => {
      const result = await campaignCollection.find().toArray();
      res.send(result);
    });

    // sort function
    app.get("/addCampaignSort", async (req, res) => {
      const result = await campaignCollection
        .find()
        .sort({ donation: 1 })
        .toArray();
      res.send(result);
    });

    //  Running Campaign
    app.get("/runningCampaign", async (req, res) => {
      const today = new Date();
      const query = { deadline: { $gt: today.toISOString() } };
      const runningCampaign = await campaignCollection
        .find(query)
        .limit(6)
        .toArray();
      res.send(runningCampaign);
    });

    //details
    app.get("/campaign/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await campaignCollection.findOne(query);
      res.send(result);
    });

    // donate collection info
    app.post("/donate", async (req, res) => {
      const data = req.body;
      const { campaignId } = data;
      const campaign = await campaignCollection.findOne({
        _id: new ObjectId(campaignId),
      });
      //check if
      const currentDate = new Date();
      const deadline = new Date(campaign.deadline);
      if (currentDate > deadline) {
        return res.status(400).send({
          message:
            "The deadline has passed. You cannot donate to this campaign.",
        });
      }
      // else
      const result = await donateCollection.insertOne(data);
      res.send(result);
    });

    // donation collection
    app.get("/donatedCampaign/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const donatedCampaigns = await donateCollection.find(query).toArray();

      res.send(donatedCampaigns);
    });

    //My Campaign
    app.get("/myCampaign/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const result = await campaignCollection.find(query).toArray();
      res.send(result);
    });

    // updated campaign
    app.get("/updatedCampaign/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await campaignCollection.findOne(query);
      res.send(result);
    });

    // updated campaign
    app.patch("/updatedCampaign/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updated = {
        $set: {
          title: data?.title,
          photo: data?.photo,
          type: data?.type,
          description: data?.description,
          donation: data?.donation,
          deadline: data?.deadline,
        },
      };
      const result = await campaignCollection.updateOne(
        query,
        updated,
        options
      );
      res.send(result);
    });

    // campaign delete
    app.delete("/myCampaign/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await campaignCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Crowd Funding Server running");
});

app.listen(port, () => {
  console.log(`Crowd Funding Running Server on ${port}`);
});
