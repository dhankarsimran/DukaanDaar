const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const express = require("express");
const mysql = require("mysql2");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});
app.get("/api", (req, res) => {
  const sqlSelect = "Select * from display_items";
  db.query(sqlSelect, (error, result) => {
    res.send(result);
  });
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
