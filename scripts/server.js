const acw_sc__v2 = require("../src/acw-sc-v2.js");
const express = require("express");
const morgan = require('morgan')

const app = express();
const port = 3000;

app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

app.post("/", (req, res) => {
  try {
    console.log(req.body.data)
    cookie = acw_sc__v2.acw_sc__v2(req.body.data);
    res.send("acw_sc__v2="+cookie);
  } catch (error) {
    console.error(error);
    res.send(error.toString());
  }
});

app.listen(port, () => {});
