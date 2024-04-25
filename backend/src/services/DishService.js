import { DishModel } from "../models/Dish";

export const getAllDishes = async () => {
  return await DishModel.find();
};

export const createDish = async (blog) => {
  return await DishModel.create(blog);
};
export const getDishById = async (id) => {
  return await DishModel.findById(id);
};

export const updateDish = async (id, blog) => {
  return await DishModel.findByIdAndUpdate(id, blog);
};

export const deleteDish = async (id) => {
  return await DishModel.findByIdAndDelete(id);
};

export const DishService = {
  getAllDishes,
  createDish,
  getDishById,
  updateDish,
  deleteDish,
};
