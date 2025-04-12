import express from 'express';
import { createUser } from '../controllers/userController.js';
import verifyFirebaseToken from '../middleware/verifyFirebaseToken.js';

const router = express.Router();

// Protected route - requires valid Firebase token
router.post('/', verifyFirebaseToken, createUser);

export default router;