// server/routes/auth.js
import express from "express";
import verifyFirebaseToken from "../middleware/verifyFirebaseToken.js";
import User from "../models/User.js";

const router = express.Router();

// User registration or login (getting organization name)
router.post('/register', (req, res) => {
  const { email, role, orgName } = req.body;
  console.log('Register route hit:', req.body);
  res.status(201).json({ message: 'Registered successfully' });
});

// Update user role and organization name
router.post("/update-role", verifyFirebaseToken, async (req, res) => {
  const { role, organizationName } = req.body;

  // Validate input
  if (!role || !organizationName) {
    return res.status(400).json({ error: "Role and organization name are required" });
  }

  try {
    const { uid } = req.firebaseUser;

    // Find the user and update their role and organization name
    let user = await User.findOne({ uid });

    if (user) {
      user.role = role;
      user.organizationName = organizationName; // Update the organization name
      await user.save();
      res.status(200).json({ message: "User role and organization updated", user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error updating role:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
