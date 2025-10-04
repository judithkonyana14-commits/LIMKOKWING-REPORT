// server.js (or app.js)

// ✅ Use only ES Modules (import)
import express from "express";
import cors from "cors";
import db from "./config/db.js"; // 👈 Import the MySQL connection

const app = express();
app.use(cors());
app.use(express.json());

// Example route to test DB
app.get("/api/courses", (req, res) => {
  db.query("SELECT * FROM courses", (err, results) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ message: "DB query failed" });
    }
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
