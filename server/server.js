import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import foodRoutes from "./routes/food.js";
import reservationRoutes from "./routes/reservation.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => res.send("FoodSaver API Running 🚀"));

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/reservations", reservationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
