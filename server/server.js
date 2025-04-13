import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import User from "./models/User.js";
import authRoutes from "./routes/auth.js";
import getFoodDonations  from "./routes/donations.js";
import  userRouter from "./routes/user.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();
app.get('/api/users/type/:email', async (req, res) => {
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

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/donations', getFoodDonations);
app.use('/users',userRouter)

app.get("/", (req, res) => res.send("🧠 FoodSaver Backend is Live"));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
