const express = require("express");

const app = express();

// app.get(/.*fly$/, (req, res) => {
//   res.send({ firstName: "Harsh", lastName: "Gurehiya" });
// });

// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send({ firstName: "Harsh", lastName: "Gurehiya" });
// });

//Dynamic Routing..
app.get("/user/:userID/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Harsh", lastName: "Gurehiya" });
});

app.listen(7777, () => {
  console.log("Server successfully started...");
});
