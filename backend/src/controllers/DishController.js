import { DishService } from "../services/DishService";

export const getAllDishes = async (req, res) => {
  try {
    const blogs = await DishService.getAllBlogs();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createDish = async (req, res) => {
  try {
    const blog = await DishService.createDish(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getDishById = async (req, res) => {
  try {
    const blog = await DishService.getDishById(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateDish = async (req, res) => {
  try {
    const blog = await DishService.updateDish(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteDish = async (req, res) => {
  try {
    const blog = await DishService.deleteDish(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const DishController = {
  getAllDishes,
  createDish,
  getDishById,
  updateDish,
  deleteDish,
};
