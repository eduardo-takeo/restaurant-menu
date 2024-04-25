const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  price: Number,
  type: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Dish", dishSchema);
