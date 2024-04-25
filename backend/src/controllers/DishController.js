const DishService = require("../services/DishService");

exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await DishService.getAllDishes();
    res.json({ data: dishes, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createDish = async (req, res) => {
  try {
    const dishes = await DishService.createDish(req.body);
    res.json({ data: dishes, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDishById = async (req, res) => {
  try {
    const dishes = await DishService.getDishById(req.params.id);
    res.json({ data: dishes, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDish = async (req, res) => {
  try {
    const dishes = await DishService.updateDish(req.params.id, req.body);
    res.json({ data: dishes, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDish = async (req, res) => {
  try {
    const dishes = await DishService.deleteDish(req.params.id);
    res.json({ data: dishes, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
