const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  sepal_length: Number,
  sepal_width: Number,
  petal_length: Number,
  petal_width: Number,
  species: String,
});

module.exports = mongoose.model("Item", itemSchema);
