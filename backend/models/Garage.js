// backend/models/Garage.js
import mongoose from "mongoose";

const sideSchema = new mongoose.Schema({
    reservedBy: String,  // Club doing the reservation
    startTime: Date,
    endTime: Date
  });

const floorSchema = new mongoose.Schema({
  floorNumber: Number,
  side1:{ reservation: sideSchema },
  side2:{ reservation: sideSchema },
  socket: { type: Boolean, default: false }
});

const garageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  floors: [floorSchema]
});

const Garages = mongoose.model('Garages', garageSchema);

export default Garages;
