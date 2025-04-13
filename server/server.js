import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import getFoodDonations  from "./routes/donations.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/donations', getFoodDonations);

app.get("/", (req, res) => res.send("🧠 FoodSaver Backend is Live"));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
