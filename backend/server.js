import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import intializeGarageData from "./setup/intializeGarage.js";
import router from "./routes/garageroutes.js";

dotenv.config

const app = express();
const PORT = process.env.PORT;

app.use("/api/garages", router);


app.listen(PORT, () => {
    connectDB();
    intializeGarageData();
    console.log("Server Started!");
})