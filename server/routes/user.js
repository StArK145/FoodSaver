import express from 'express';
import { createUser } from '../controllers/userController.js';
import verifyFirebaseToken from '../middleware/verifyFirebaseToken.js';
import User from '../models/User.js';

const router = express.Router();

// Protected route - requires valid Firebase token
router.post('/', verifyFirebaseToken, createUser);

// Define the route using the 'router' object, not 'app'
router.get('/api/users/type/:email', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the userType
        res.json({ userType: user.userType });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;  // This exports the router object
