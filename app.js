const handle = require("./src/handle.js");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  try {
    console.log(req.body.data)
    cookie = handle.handle(req.body.data);
    res.send(cookie);
  } catch (error) {
    console.error(error);
    res.send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
