const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Test response!");
});

app.use("/hello", (req, res) => {
  res.send("Hello world!");
});

app.use("/", (req, res) => {
  res.send("Hello from server!");
});

app.listen(7777, () => {
  console.log("Server successfully started!");
});
