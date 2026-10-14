import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./Db/db.js";


const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}));

connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

