import mysql from "mysql";

// Database connection
const db = mysql.createPool({
  user: "root",
  host: "localhost",
  password: "",
  database: "portfolio_database",
  connectionLimit: 10,
});

export default db;
