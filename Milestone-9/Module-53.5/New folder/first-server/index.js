const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("my phone information coming soon toon");
});

/*  data get from server */
app.get("/phones", (req, res) => {
  res.send(phones);
});

/* dynamic way get data from server */
app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("need id", id);
  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`my phone server is running on port :${port}`);
});
