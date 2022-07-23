import express from "express";
import contactFormRoutes from "./routes/contactForm.js";

const app = express();

const PORT = 4000;

app.use(express.json());

app.use("/entries", contactFormRoutes);

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
