const DishModel = require("../models/Dish");

exports.getAllDishes = async () => {
  return await DishModel.find();
};

exports.createDish = async (blog) => {
  return await DishModel.create(blog);
};
exports.getDishById = async (id) => {
  return await DishModel.findById(id);
};

exports.updateDish = async (id, blog) => {
  return await DishModel.findByIdAndUpdate(id, blog);
};

exports.deleteDish = async (id) => {
  return await DishModel.findByIdAndDelete(id);
};
