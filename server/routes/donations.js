import express from 'express';
import Donation from '../models/Donation.js';

const router = express.Router();

// Create donation
router.post('/', async(req, res) => {
  const { donatedBy,foodType, quantity, expiryDate, contactInfo, location, notes } = req.body;
console.log(req.body);

   try {
    const donation = new Donation(req.body);
    await donation.save();

    
    res.status(201).json({ message: "Donation successfully saved!" });
  } catch (err) {
    console.error("Error saving donation:", err);
    res.status(500).json({ error: "Failed to save donation." });
  }
});

// Get all available donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find({ isReserved: false });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching donations', error });
  }
});

// Reserve a donation
router.put('/:id/reserve', async (req, res) => {
  try {
    const { reservedBy } = req.body;
    const updatedDonation = await Donation.findByIdAndUpdate(
      req.params.id,
      { isReserved: true, reservedBy },
      { new: true }
    );
    res.json(updatedDonation);
  } catch (error) {
    res.status(500).json({ message: 'Error reserving donation', error });
  }
});

export default router;
