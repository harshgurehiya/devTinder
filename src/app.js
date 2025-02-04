const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //creating a new instance of User model
  const user = new User({
    firstName: "MS",
    lastName: "Dhoni",
    emailId: "dhoni@test.com",
    password: "dhoni123",
  });

  try {
    //throw new Error("jhdsudhsjdhsjk");
    await user.save();
    res.send("User saved successfully!!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected!!");
  });
