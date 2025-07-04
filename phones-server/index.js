const express = require("express");
const cors = require("cors");
const phones = require("./phones.json");
const app = express();
const port = 3000;

/* middle wire  */
app.use(cors());

app.get("/", (req, res) => {
  res.send("Phones coming soon");
});

/* data get from server */
app.get("/phones", (req, res) => {
  res.send(phones);
});

/* dynamic way get data form server */
app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  /*  console.log('need id',id) */
  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`Phone server is running ${port}`);
});
