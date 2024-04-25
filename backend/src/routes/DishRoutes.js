import express from "express";

import {
  getAllDishes,
  getDishById,
  createDish,
  updateDish,
  deleteDish,
} from "../controllers/DishController";

const router = express.Router();

router.route("/").get(getAllDishes).post(createDish);
router.route("/:id").get(getDishById).put(updateDish).delete(deleteDish);

export default router;
