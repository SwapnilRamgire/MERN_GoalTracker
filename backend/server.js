// importing packages
import express from "express";
import * as dotenv from "dotenv";
// importing routes
import { Goals } from "./routes/goalRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/api/goals", Goals);

app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));
