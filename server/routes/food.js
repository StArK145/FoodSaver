// server/routes/food.js
import express from "express";
import verifyFirebaseToken from "../middleware/verifyFirebaseToken.js";
import requireRole from "../middleware/roleMiddleware.js";
import FoodItem from "../models/FoodItem.js";
import User from "../models/User.js";

const router = express.Router();

// Route for both Donors and Receivers to list food (they need org name)
router.post("/list", verifyFirebaseToken, async (req, res) => {
  const { uid } = req.firebaseUser;
  const { foodType, quantity, expiryDate, location } = req.body;

  try {
    const user = await User.findOne({ uid });

    if (!user || !user.organizationName) {
      return res.status(400).json({ error: "Organization name required" });
    }

    const newFoodItem = new FoodItem({
      uid,
      foodType,
      quantity,
      expiryDate,
      location,
      organizationName: user.organizationName,  // Use org name for both Donors and Receivers
      listedBy: uid,  // Optional, to track the donor
    });

    await newFoodItem.save();
    res.status(201).json({ message: "Food item listed successfully", foodItem: newFoodItem });
  } catch (err) {
    console.error("Error listing food:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
