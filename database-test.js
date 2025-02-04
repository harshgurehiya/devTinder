// const { MongoClient } = require("mongodb");

// const url =
//   "mongodb+srv://harshdev:gQDHV99oOsWreZ9w@harsh27.ge59d.mongodb.net/";

// const client = new MongoClient(url);

// // Database Name
// const dbName = "HelloWorld";

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   const collection = db.collection("User");

//   // Insert
//   // const data = {
//   //   firstname: "Archit",
//   //   lastname: "Saxena",
//   //   age: 26,
//   //   city: "Bareilly",
//   // };
//   // const insertResult = await collection.insertMany([data]);
//   // console.log("Inserted documents =>", insertResult);

//   // Read
//   const findResult = await collection.find({}).toArray();
//   console.log("Found documents =>", findResult);

//   // const countResult = await collection.countDocuments({});
//   // console.log("Count documents =>", countResult);

//   const result = await collection.countDocuments({ firstname: "Harsh" });
//   console.log("Result =>", result);

//   return "done.";
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());
