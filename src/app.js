const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  //console.log(req.body);
  //creating a new instance of User model
  const user = new User(req.body);

  try {
    //throw new Error("jhdsudhsjdhsjk");
    await user.save();
    res.send("User saved successfully!!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  // try {
  //   const users = await User.findOne({ emailId: userEmail });

  //   if (!users) {
  //     res.status(404).send("User not found");
  //   } else {
  //     res.send(users);
  //   }
  // } catch (err) {
  //   res.status(400).send("Something went wrong!!");
  // }
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found!");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong!");
  }
});

// Feed API - GET /feed - get all users from the database

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong!!");
  }
});

// Delete API - Delete user by Id
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  console.log("Id: ", userId);
  try {
    const user = await User.findByIdAndDelete(userId);
    console.log("Deleted user: ", user);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Something went wrong!!");
  }
});

// Patch API - update user by Id
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  console.log(data);
  try {
    const user = await User.findByIdAndUpdate(userId, data);
    res.send("User updated successfully!");
  } catch (err) {
    res.status(400).send("Something went wrong!!");
  }
});

// app.patch("/user", async (req, res) => {
//   const userEmail = req.body.userEmail;
//   const data = req.body;
//   console.log(data);
//   try {
//     const user = await User.findOneAndUpdate({ emailId: userEmail }, data);
//     res.send("User updated successfully!");
//   } catch (err) {
//     res.status(400).send("Something went wrong!!");
//   }
// });

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
