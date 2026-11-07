// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");

// const PORT = process.env.PORT || 3002;
// const MONGO_URL = process.env.mongodb;
// const { HoldingsModel } = require("./model/HoldingsModel");

// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");

// const app = express();

// // const holdingsSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   qty: { type: Number, required: true },
// //   avg: { type: Number, required: true },
// //   price: { type: Number, required: true },
// //   net: String,
// //   day: String,
// //   isLoss: Boolean,
// // });

// // const positionsSchema = new mongoose.Schema({
// //   product: { type: String, required: true },
// //   name: { type: String, required: true },
// //   qty: { type: Number, required: true },
// //   avg: { type: Number, required: true },
// //   price: { type: Number, required: true },
// //   net: String,
// //   day: String,
// //   isLoss: Boolean,
// // });

// // const holdingsModel = mongoose.models.Holding || mongoose.model("Holding", holdingsSchema);
// // const positionsModel = mongoose.models.Position || mongoose.model("Position", positionsSchema);

// app.get("/addPositions", async (req, res) => {
//   const positions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "-1.24%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "-1.35%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   await positionsModel.insertMany(positions);
//   res.status(201).send("Positions added successfully");
// });

// // Catches errors from async routes (Express 4 doesn't do this automatically)
// // app.use((err, req, res, next) => {
// //   console.error(err);
// //   res.status(500).send("Failed: " + err.message);
// // });

// mongoose
//   .connect(MONGO_URL)
//   .then(() => {
//     console.log("DB connected");
//     app.listen(PORT, () => console.log("App has started on port " + PORT));
//   })
//   .catch((error) => {
//     console.error("Database connection failed:", error.message);
//     process.exit(1);
//   });

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

 const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.mongodb;

// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");

const app = express();

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DB connected");

    app.listen(PORT, () =>
      console.log("App has started on port " + PORT)
    );
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  });