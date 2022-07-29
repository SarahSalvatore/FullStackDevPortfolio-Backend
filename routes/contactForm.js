import express from "express";
import { validateFormInfo } from "../helpers/contactFormHelpers.js";

const router = express.Router();

// Create a new contact form entry
router.post("/", validateFormInfo);

// Get all contact form entries
router.get("/");

// Update a contact form
router.put("/");

// Delete a contact form entry
router.delete("/");

export default router;
