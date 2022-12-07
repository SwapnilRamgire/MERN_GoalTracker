import express from "express";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
import {
  registereUser,
  loginUser,
  getMe,
} from "../controllers/userController.js";

router.post("/", registereUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export { router as Users };
