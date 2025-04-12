import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    // req.user contains decoded Firebase token (from middleware)
    const { uid, email } = req.user;
    
    // Check if user already exists
    const existingUser = await User.findOne({ uid });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user document
    const newUser = new User({
      uid,
      email,
      ...req.body // includes name, userType, phone, etc.
    });

    await newUser.save();

    // Return user data without sensitive info
    const userResponse = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      userType: newUser.userType,
      createdAt: newUser.createdAt
    };

    res.status(201).json(userResponse);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};