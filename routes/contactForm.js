import express from "express";
import { createContactFormEntry } from "../controllers/contactFormController.js";
import { readMasterList, entries } from "../controllers/databasehandler.js";

const router = express.Router();

// Route to create a new contact form entry - /contact_form/entries

router.post("/", createContactFormEntry);

// Route to get all contact form submissions - /contact_form/entries

router.get("/", async (req, res) => {
  try {
    const contactFormMasterList = await readMasterList(entries);
    return res.status(200).json(contactFormMasterList);
  } catch (err) {
    return res.status(500).json({
      message: "Oops. Something has gone wrong. Our team has been notified.",
    });
  }
});

export default router;
