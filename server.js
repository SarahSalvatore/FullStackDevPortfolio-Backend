import express from "express";
import cors from "cors";
import contactFormRoutes from "./routes/contactForm.js";

// Express middleware, cors and PORT setup
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());

//Routes

// contact form entries route
app.use("/entries", contactFormRoutes);

// Default route
app.get("/", (req, res) =>
  res.status(200).json(`Node and Express server running on port: ${PORT}`)
);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).json({ message: "not found" });
});

// Bind app and listen for connections on port 4000
app.listen(PORT, () =>
  console.log(`REST API server ready on http://localhost:${PORT}`)
);
