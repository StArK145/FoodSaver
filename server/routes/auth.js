// server/routes/auth.js
import express from "express";
import verifyFirebaseToken from "../middleware/verifyFirebaseToken.js";
import User from "../models/User.js";

const router = express.Router();

// User registration or login (getting organization name)
router.post("/register/users", async (req, res) => {
  const { uid, username, name, email, orgName, phoneNo, userType } = req.body;

  // Input validation
  if (!uid || !username || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Generate Google-like ID helper
  const generateGoogleId = () => {
    return 'G-' + Math.floor(100000000000000000000 + Math.random() * 900000000000000000000).toString();
  };

  function generateGoogleStyleId() {
    const randomNum = Math.floor(1000000000 + Math.random() * 9000000000);
    return `G-${randomNum}`;
}

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({ 
      $or: [{ username }, { email }, { uid }]
    });

    if (existingUser) {
      let conflictField;
      if (existingUser.username === username) conflictField = "username";
      if (existingUser.email === email) conflictField = "email";
      if (existingUser.uid === uid) conflictField = "Firebase UID";
      
      return res.status(409).json({ 
        message: `${conflictField} already in use`,
        field: conflictField
      });
    }

    // Create new user
    const newUser = new User({
      uid,
      username,
      name,
      email,
      orgName,
      phoneNo,
      googleId: generateGoogleId(),
      googleStyleId:generateGoogleStyleId(),
      userType,
      createdAt: new Date() // Track registration time
    });

    await newUser.save();
    
    res.status(201).json({ 
      message: "User registered successfully",
      user: {
        uid: newUser.uid,
        username: newUser.username,
        email: newUser.email
      }
    });

  } catch (error) {
    console.error("Error registering user:", error);
    
    // Handle duplicate key errors separately
    if (error.code === 11000) {
      const key = Object.keys(error.keyPattern)[0];
      return res.status(409).json({
        message: `${key} already exists`,
        field: key
      });
    }
    
    res.status(500).json({ 
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
});


router.post("/save-user", verifyFirebaseToken, async (req, res) => {
  const { name, email, role, organization } = req.body;
  const uid = req.user.uid; // Firebase UID from the verified token

  // Check if all required fields are provided
  if (!name || !email || !role || !organization) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Check if the user already exists in the database
    let user = await User.findOne({ uid });

    if (!user) {
      // Create a new user document if not found
      user = new User({ 
        uid, 
        name, 
        email, 
        role, 
        organization
      });

      await user.save(); // Save the new user to the database

      return res.status(201).json({
        message: "User created successfully",
        user,  // Return user data as response
      });
    } else {
      // If user already exists, just return the user info
      return res.status(200).json({
        message: "User already exists",
        user,  // Return existing user data
      });
    }
  } catch (err) {
    console.error("Mongo Save Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
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
