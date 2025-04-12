import express from "express";
import verifyFirebaseToken from "../middleware/verifyFirebaseToken.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/login", verifyFirebaseToken, async (req, res) => {
  const { uid, email, name } = req.firebaseUser;

  let user = await User.findOne({ uid });
  if (!user) {
    user = await User.create({ uid, email, name });
  }

  res.json({ message: "User logged in", user });
});

export default router;
