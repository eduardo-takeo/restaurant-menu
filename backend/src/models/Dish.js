import { mongoose } from "mongoose";
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

export const DishModel = mongoose.model("Dish", dishSchema);
