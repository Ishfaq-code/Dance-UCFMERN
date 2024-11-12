import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import intializeGarageData from "./setup/intializeGarage.js";

dotenv.config

const app = express();
const PORT = process.env.PORT;



app.listen(PORT, () => {
    connectDB();
    intializeGarageData();
    console.log("Server Started!");
})