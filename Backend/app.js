import dotenv from "dotenv"
import express from "express";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoutes from "./routes/user.route.js"
import riderRoutes from "./routes/rider.route.js"
import cookieParser from "cookie-parser";

dotenv.config()
connectDB();
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send('Chal Rha Hai')
})

app.use("/user", userRoutes)

app.use("/rider",riderRoutes)


export default app