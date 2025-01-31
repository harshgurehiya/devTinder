const express = require("express");

const app = express();

app.get("/user/:userID/:name", (req, res, next) => {
  console.log("Handling Response..");
  console.log(req.params);
  //res.send("Response!!");
  next();
});

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling route handler 1");
    //res.send("Response 1");
    next();
  },
  (req, res, next) => {
    console.log("Handling route handler 2");
    res.send("Response 2");
  },
  (req, res, next) => {
    console.log("Handling route handler 3");
    res.send("Response 3");
  }
);

app.listen(7777, () => {
  console.log("Server successfully started...");
});
