// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  orgName: { type: String, required: true },
  phoneNo: { type: String, required: true },
  userType: { type: String, enum: ["donor", "receiver"], required: true },
  googleId: {
  type: String,
  unique: true,
  sparse: true
},
googleStyleId: {
  type: String,
  unique: true,
  sparse: true
}

});

const User = mongoose.model("User", userSchema);

// Default export for ES module
export default User;
