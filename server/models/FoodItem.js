import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  donorId: String,
  donorEmail: String,
  foodType: String,
  quantity: Number,
  expiryDate: Date,
  location: String,
  urgencyLevel: String, // e.g., "high", "medium", "low"
  status: { type: String, default: "available" }, // "reserved", "picked up"
  aiTags: [String],
}, { timestamps: true });

export default mongoose.model("FoodItem", foodItemSchema);
