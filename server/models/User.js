// server/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
  name: String,
  organizationName: {
    type: String,
    required: true,  // Both roles require the organization name
  },
  role: {
    type: String,
    enum: ["donor", "receiver"],
    default: "donor",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
