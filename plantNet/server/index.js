require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");

const nodemailer = require("nodemailer");

const port = process.env.PORT || 9000;
const app = express();

// middleware
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};

// Send email using nodemailer(kake pathabo (to),ki email pathabo)
const sendEmail = (emailAddress, emailData) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  // verify connection
  transporter.verify((error, success) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Transport verify: ", success);
    }
  });
  const mailOptions = {
    from: process.env.NODEMAILER_USER, // sender address
    to: emailAddress, // list of receivers
    subject: emailData?.subject, // subject line
    // text: emailData?.message, // plain text body
    html: `<p>${emailData?.message}</p>`,
  };
  // send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info?.response);
    }
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bmcuq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // db collection
    const db = client.db("plantNet");
    const useCollection = db.collection("users");
    const plantsCollection = db.collection("plants");
    const ordersCollection = db.collection("orders");

    // Generate jwt token
    app.post("/jwt", async (req, res) => {
      const email = req.body;
      const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "365d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });
    // Logout
    app.get("/logout", async (req, res) => {
      try {
        res
          .clearCookie("token", {
            maxAge: 0,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          })
          .send({ success: true });
      } catch (err) {
        res.status(500).send(err);
      }
    });

    // verify admin (middleware)
    const verifyAdmin = async (req, res, next) => {
      const email = req.user?.email;
      const query = { email };
      const result = await useCollection.findOne(query);
      if (!result || result?.role !== "admin") {
        return res
          .status(403)
          .send({ message: "Forbidden Access! Admin Only Actions!" });
      }
      next();
    };

    // verify seller (middleware)
    const verifySeller = async (req, res, next) => {
      const email = req.user?.email;
      const query = { email };
      const result = await useCollection.findOne(query);
      if (!result || result?.role !== "seller") {
        return res
          .status(403)
          .send({ message: "Forbidden Access! Seller Only Actions!" });
      }
      next();
    };

    // save a plant data  in db
    app.post("/plants", verifyToken, async (req, res) => {
      const plant = req.body;
      const result = await plantsCollection.insertOne(plant);
      res.send(result);
    });

    // get All Plant data  in db
    app.get("/plants", async (req, res) => {
      const result = await plantsCollection.find().toArray();
      res.send(result);
    });

    // get a plant by id(specif plant)
    app.get("/plants/:id", async (req, res) => {
      const id = req.params.id;

      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: "Invalid ID format" });
      }
      const query = { _id: new ObjectId(id) };
      const result = await plantsCollection.findOne(query);
      res.send(result);
    });

    // get inventory data for seller (get plant a seller)
    app.get("/plant/seller", verifyToken, verifySeller, async (req, res) => {
      const email = req.user?.email;
      const result = await plantsCollection
        .find({ "seller.email": email })
        .toArray();
      res.send(result);
    });

    // delete a plant from db by seller
    app.delete("/plant/:id", verifyToken, verifySeller, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await plantsCollection.deleteOne(query);
      res.send(query);
    });

    // get all orders for a specific seller
    app.get(
      "/seller-orders/:email",
      verifyToken,
      verifySeller,
      async (req, res) => {
        const email = req.params.email;
        const query = { seller: email };
        /* const result = await ordersCollection.find(query).toArray(); */
        // using aggregate
        const result = await ordersCollection
          .aggregate([
            {
              // match specific customers data only by email
              $match: { seller: email },
            },
            {
              $addFields: {
                // convert plantId string field to objectId filed
                plantId: { $toObjectId: "$plantId" },
              },
            },
            {
              //go to a different collection and look for data
              $lookup: {
                from: "plants", // collection name
                localField: "plantId", // local data that you want to match
                foreignField: "_id", // foreign field name of that same data
                as: "plants", // return the data as plants array (array naming)
              },
            },
            // unwind lookup result, return without array
            { $unwind: "$plants" },
            {
              $addFields: {
                // add these field in order object
                name: "$plants.name",
              },
            },
            {
              // remove plants object property from order object
              $project: {
                plants: 0,
              },
            },
          ])
          .toArray();

        res.send(result);
      }
    );

    // update a order status ( seller)
    app.patch("/order/:id", verifyToken, verifySeller, async (req, res) => {
      const id = req.params.id;
      const { status } = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: { status },
      };
      const result = await ordersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // save or update a user in db
    app.post("/users/:email", async (req, res) => {
      sendEmail();
      const email = req.params.email;
      const query = { email };
      const user = req.body;

      // check if user exists in db
      const isExist = await useCollection.findOne(query);
      if (isExist) {
        return res.send(isExist);
      }

      const result = await useCollection.insertOne({
        ...user,
        role: "customer",
        timestamp: Date.now(),
      });
      res.send(result);
    });

    // manage user status and roll
    app.patch("/users/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const user = await useCollection.findOne(query);
      if (!user || user?.status === "requested") {
        return res
          .status(400)
          .send("You have already requested wait for some time");
      }

      const updateDoc = {
        $set: {
          status: "requested",
        },
      };
      const result = await useCollection.updateOne(query, updateDoc);
      res.send(result);
    });

    // save order data in db
    app.post("/orders", verifyToken, async (req, res) => {
      const orderInfo = req.body;
      const result = await ordersCollection.insertOne(orderInfo);

      // send email
      if (result?.insertedId) {
        // to customer
        sendEmail(orderInfo?.customer?.email, {
          subject: "Order Successful",
          message: `You've placed an order successfully.Transaction Id:${result?.insertedId} `,
        });
        // to seller
        sendEmail(orderInfo?.seller, {
          subject: "Hurray! You have an order to process",
          message: `Get the plants ready for:${orderInfo?.customer?.name} `,
        });
      }

      res.send(result);
    });

    // Manage plant quantity
    app.patch("/plants/quantity/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const { quantityToUpdate, status } = req.body;

      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: "Invalid ID format" });
      }
      const filter = { _id: new ObjectId(id) };
      // decrease quantity (after order)
      let updateDoc = {
        $inc: { quantity: -quantityToUpdate },
      };
      // increase quantity after cancel order
      if (status === "increase") {
        updateDoc = {
          $inc: { quantity: quantityToUpdate },
        };
      }
      const result = await plantsCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // get all orders for a specific customer (my order)
    app.get("/customer-orders/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      const query = { "customer.email": email };
      /* const result = await ordersCollection.find(query).toArray(); */
      // using aggregate
      const result = await ordersCollection
        .aggregate([
          {
            // match specific customers data only by email
            $match: { "customer.email": email },
          },
          {
            $addFields: {
              // convert plantId string field to objectId filed
              plantId: { $toObjectId: "$plantId" },
            },
          },
          {
            //go to a different collection and look for data
            $lookup: {
              from: "plants", // collection name
              localField: "plantId", // local data that you want to match
              foreignField: "_id", // foreign field name of that same data
              as: "plants", // return the data as plants array (array naming)
            },
          },
          // unwind lookup result, return without array
          { $unwind: "$plants" },
          {
            $addFields: {
              // add these field in order object
              name: "$plants.name",
              image: "$plants.image",
              category: "$plants.category",
            },
          },
          {
            // remove plants object property from order object
            $project: {
              plants: 0,
            },
          },
        ])
        .toArray();

      res.send(result);
    });

    // cancel/delete specific a customer an order
    app.delete("/orders/:id", verifyToken, async (req, res) => {
      const id = req.params.id;

      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: "Invalid ID format" });
      }
      const query = { _id: new ObjectId(id) };
      // status change
      const order = await ordersCollection.findOne(query);
      if (order.status === "Delivered") {
        return res
          .status(409)
          .send("Cannot cancel once the product is delivered!");
      }
      //delete
      const result = await ordersCollection.deleteOne(query);
      res.send(result);
    });

    //get user role
    app.get("/users/role/:email", async (req, res) => {
      const email = req.params.email;
      const result = await useCollection.findOne({ email });
      res.send({ role: result?.role });
    });

    // get all user data
    app.get("/All-Users/:email", verifyToken, verifyAdmin, async (req, res) => {
      const email = req.params.email;
      // admin nijer email chara sobi email show korbe
      const query = { email: { $ne: email } };
      const result = await useCollection.find(query).toArray();
      res.send(result);
    });

    // update user roll & status (admin side)
    app.patch(
      "/user/role/:email",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const email = req.params.email;
        const { role } = req.body;
        const filter = { email };
        const updateDoc = {
          $set: {
            role,
            status: "verified",
          },
        };
        const result = await useCollection.updateOne(filter, updateDoc);
        res.send(result);
      }
    );

<<<<<<< HEAD
    // admin state
    app.get("/admin-stat", verifyToken, verifyAdmin, async (req, res) => {
      //get total user,total plants
      const totalUser = await useCollection.countDocuments();
      const totalPlants = await plantsCollection.estimatedDocumentCount();

      const allOrder = await ordersCollection.find().toArray();

      // local way
      /*const totalOrders = allOrder.length;
      const totalPrice = allOrder.reduce((sum, order) => sum + order.price, 0);
      console.log(totalPrice,totalOrders); */

      // generate chart data
      /*    const myData = {
        date: "11/01/2025",
        quantity: 12,
        price: 1500,
        order: 3,
      }; */
      const charData = await ordersCollection
        .aggregate([
          {
            $group: {
              _id: {
                $dateToString: {
                  format: "%Y-%m-%d",
                  date: { $toDate: "$_id" },
                },
              },
              quantity: {
                $sum: "$quantity",
              },
              price: { $sum: "$price" },
              order: { $sum: 1 },
            },
          },
          {
            $project: {
              _id: 0,
              date: "$_id",
              quantity: 1,
              order: 1,
              price: 1,
            },
          },
        ])
        .toArray();

      //get total revenue,total order (use aggregate)
      const ordersDetails = await ordersCollection
        .aggregate([
          {
            // price sum & order sum
            $group: {
              _id: null,
              totalRevenue: { $sum: "$price" },
              totalOrder: { $sum: 1 },
            },
          },
          {
            $project: {
              _id: 0,
            },
          },
        ])
        .next();

      res.send({ totalPlants, totalUser, ...ordersDetails, charData });
    });

=======
>>>>>>> 6798ab54149d5e1818931ac29cc8782967a95b81
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from plantNet Server..");
});

app.listen(port, () => {
  console.log(`plantNet is running on port ${port}`);
});
