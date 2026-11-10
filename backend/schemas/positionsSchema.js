const mongoose = require("mongoose");

const positionsSchema = new mongoose.Schema({
  product: { type: String, required: true },
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number, required: true },
  price: { type: Number, required: true },
  net: String,
  day: String,
  isLoss: Boolean,
});

// const positionsModel = mongoose.model("position", positionsSchema);

module.exports = { positionsSchema };