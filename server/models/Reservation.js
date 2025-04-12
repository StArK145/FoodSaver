import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  foodId: String,
  reservedBy: String, // receiver or volunteer UID
  status: { type: String, default: "reserved" }, // "picked up", etc.
}, { timestamps: true });

export default mongoose.model("Reservation", reservationSchema);
