import express from "express";
const router = express.Router();
import {
  getGoal,
  postGoal,
  putGoal,
  deleteGoals,
} from "../controllers/goalController.js";
import { protect } from "../middleware/authMiddleware.js";

router.get("/", protect, getGoal);
router.post("/", protect, postGoal);
router.put("/:id", protect, putGoal);
router.delete("/:id", protect, deleteGoals);

export { router as Goals };
