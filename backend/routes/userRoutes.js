import express from "express";
const router = express.Router();
import {
  registereUser,
  loginUser,
  getMe,
} from "../controllers/userController.js";

router.post("/", registereUser);
router.post("/login", loginUser);
router.get("/me", getMe);

export { router as Users };
