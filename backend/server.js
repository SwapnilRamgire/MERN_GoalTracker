// importing packages
import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
// importing routes
import { Goals } from "./routes/goalRoutes.js";
import { Users } from "./routes/userRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("Connected to database..."))
  .catch((err) => {
    console.log("Failed to connect database...", err);
  });

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/goals", Goals);
app.use("/api/users", Users);

app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));
