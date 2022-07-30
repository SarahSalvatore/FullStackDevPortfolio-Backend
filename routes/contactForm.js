import express from "express";
import {
  validateFormInfo,
  createNewForm,
} from "../helpers/contactFormHelpers.js";

const router = express.Router();

// Create a new contact form entry
router.post("/", validateFormInfo, createNewForm);

// Get all contact form entries
router.get("/");

// Update a contact form
router.put("/");

// Delete a contact form entry
router.delete("/");

export default router;
