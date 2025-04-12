import express from "express";
import FoodItem from "../models/FoodItem.js";
import verifyFirebaseToken from "../middleware/verifyFirebaseToken.js";

const router = express.Router();

// POST /api/food
router.post("/", verifyFirebaseToken, async (req, res) => {
  const { foodType, quantity, expiryDate, location, urgencyLevel, aiTags } = req.body;
  const donorEmail = req.firebaseUser.email;
  const donorId = req.firebaseUser.uid;

  const food = await FoodItem.create({ donorId, donorEmail, foodType, quantity, expiryDate, location, urgencyLevel, aiTags });
  res.status(201).json(food);
});

// GET /api/food
router.get("/", async (req, res) => {
  const foodList = await FoodItem.find({ status: "available" });
  res.json(foodList);
});

export default router;
