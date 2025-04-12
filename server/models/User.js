import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  email: String,
  role: { type: String, enum: ["donor", "receiver", "admin", "volunteer"], default: "donor" },
  name: String,
  location: String,
}, { timestamps: true });

export default mongoose.model("User", userSchema);
