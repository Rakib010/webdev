const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

/* middleware */
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "sabana", email: "sabana1@gmail.com" },
  { id: 2, name: "sabnor", email: "sabnor2@gmail.com" },
  { id: 3, name: "sabila", email: "sabila3@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("users Management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  /* console.log("hit"); */
  console.log(req.body);

  /*  */
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
