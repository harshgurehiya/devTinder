const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://harshdev:gQDHV99oOsWreZ9w@harsh27.ge59d.mongodb.net/devTinder"
  );
};

module.exports = { connectDB };
