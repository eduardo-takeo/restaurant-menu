const express = require("express");

const {
  getAllDishes,
  getDishById,
  createDish,
  updateDish,
  deleteDish,
} = require("../controllers/DishController");

const router = express.Router();

router.route("/").get(getAllDishes).post(createDish);
router.route("/:id").get(getDishById).put(updateDish).delete(deleteDish);

module.exports = router;
