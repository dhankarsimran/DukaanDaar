import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
//configure env
dotenv.config();
//database config
connectDB();
//rest object
const app = express();
//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
//routes
app.use("/api/v1/auth", authRoutes);
//rest API
app.get("/", (req, res) => {
  res.send("<h1>DukaanDaar backend</h1>");
});
//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.bgMagenta.white);
});
