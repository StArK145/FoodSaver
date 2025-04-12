import express from "express";
import verifyFirebaseToken from "../middleware/verifyFirebaseToken.js";
import Reservation from "../models/Reservation.js";
import FoodItem from "../models/FoodItem.js";

const router = express.Router();

router.post("/:foodId", verifyFirebaseToken, async (req, res) => {
  const foodId = req.params.foodId;
  const reservedBy = req.firebaseUser.uid;

  const food = await FoodItem.findById(foodId);
  if (!food || food.status !== "available") {
    return res.status(400).json({ error: "Food not available" });
  }

  food.status = "reserved";
  await food.save();

  const reservation = await Reservation.create({ foodId, reservedBy });
  res.json(reservation);
});

export default router;
