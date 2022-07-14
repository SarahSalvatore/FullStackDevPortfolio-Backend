import express from "express";
import * as dotenv from "dotenv";
import contactFormRoutes from "./routes/contactForm.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/entries", (contactFormRoutes) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );
});

app.get("/", (req, res) =>
  res.status(200).json(`Node and Express server running on port: ${PORT}`)
);

// Global error handler

app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).json({ message: "not found" });
});

app.listen(PORT, () =>
  console.log(`REST API server ready on http://localhost:${PORT}`)
);
