const express = require("express");
const app = express();
const color = require("colors");

app.get((req, res) => {
  res.send("PONG");
});

app.listen(8080, () => {
  console.log(color.green("Server Online at http://localhost:8080"));
});
