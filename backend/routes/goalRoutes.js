import express from "express";
const router = express.Router();
import {
  getGoal,
  postGoal,
  putGoal,
  deleteGoals,
} from "../controllers/goalController.js";

router.get("/", getGoal);
router.post("/", postGoal);
router.put("/:id", putGoal);
router.delete("/:id", deleteGoals);

export { router as Goals };
