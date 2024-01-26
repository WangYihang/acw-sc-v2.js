const fs = require("fs");
const acw_sc__v2 = require("./acw-sc-v2.js");

let textarea = document.getElementById("data");
let button = document.getElementById("submit");

function setup() {
  textarea.placeholder = fs.readFileSync("assets/index.html", "utf8");
  button.addEventListener("click", generate);
}

function generate() {
  let data = textarea.value === "" ? textarea.placeholder : textarea.value;
  alert("acw_sc__v2="+acw_sc__v2.acw_sc__v2(data));
}

setup();