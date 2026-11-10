

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/holdingsModel");
const { PositionsModel } = require("./models/positionsModel");
const { OrdersModel } = require("./models/ordersModel");
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL || process.env.mongodb;
const bodyParser=require("body-parser");
const cors=require('cors');

// if (!MONGO_URL) {
//   console.error("MongoDB connection URL is missing. Add MONGO_URL to backend/.env");
//   process.exit(1);
// }



// const { HoldingsModel } = require("./models/HoldingsModel");






const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get('/addHoldings', async (req, res) => {
   
    const allHoldings = await HoldingsModel.find({});
    // console.log(allHoldings);
    res.json(allHoldings);
  } 
);

app.get('/addpositions', async (req, res) => {
   
    const allpositions = await PositionsModel.find({});
    // console.log(allpositions);
    res.json(allpositions);
  } 
);
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  awaitnewOrder.save();

  res.send("Order saved!");
});
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