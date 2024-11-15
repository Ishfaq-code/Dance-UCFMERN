// backend/routes/garages.js
import express from 'express';
const router = express.Router();
import Garages from '../models/Garage.js';

// Get method to get information about the Garages
router.get("/", async (req, res) => {
    try{
        const allGarages = await Garages.find({});
        res.status(200).json({success:true, data:allGarages});
    }
    catch(error){
        console.error("Error fetching garages", error.message);
        res.status(500).json({success: false, message:"Server Error"});
    }
})

export default router;
