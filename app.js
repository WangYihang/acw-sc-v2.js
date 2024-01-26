const acw_sc__v2 = require("./src/acw-sc-v2.js");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = 3000;

app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function handle(req, res) {
  try {
    console.log(req.body.data);
    cookie = acw_sc__v2.acw_sc__v2(req.body.data);
    res.send(cookie);
  } catch (error) {
    console.error(error);
    res.send(error.toString());
  }
}

app.use("/", express.static(path.join(__dirname, "dist")));
app.post("/", handle);

app.listen(port, () => {});
