// config/db.js
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",          // default XAMPP user
  password: "",          // leave empty unless you set a password
  database: "luct_report"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL Database (luct_report)!");
  }
});

export default db;
