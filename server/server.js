import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import connectDb from './config/db.js';


dotenv.config();

connectDb();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("API is running...");
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
