import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  donatedBy: {
    type: String, // Firebase UID
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  expiryTime: {
    type: Date,
    required: true,
  },
  isReserved: {
    type: Boolean,
    default: false,
  },
  reservedBy: {
    type: String, // Firebase UID of receiver
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Donation =mongoose.model("Donation", donationSchema);

export default Donation;
