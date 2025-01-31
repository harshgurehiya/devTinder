const express = require("express");

const app = express();
const { adminAuth, userAuth } = require("./Middlewares/auth");

//Handling admin authentication - GET, POST,....

app.use("/admin", adminAuth);

app.get("/user/login", (req, res) => {
  res.send("User logged in successfully!!");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

app.get("/admin/deleteAllData", (req, res) => {
  res.send("Deleted all the data");
});

// app.get("/admin/getUserData", (req, res) => {
//   try {
//     throw new Error("xnbsauhjsfjm");
//   } catch (error) {
//     res.status(500).send("Some Error!!");
//   }
// });

app.use("/", (err, req, res, next) => {
  res.status(500).send("Something went wrong. Contact support team.");
});

app.listen(7777, () => {
  console.log("Server successfully started...");
});
