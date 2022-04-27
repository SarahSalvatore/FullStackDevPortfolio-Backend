import express from "express";
import { checkMissingContactFormProperties, createContactFormEntry, getContactFormById } from "../controllers/contactFormController.js";
import { validateEmail, verifyToken, contactFormMasterList } from "../controllers/validationController.js";
import { readMasterList, entries } from "../controllers/databasehandler.js";

const router = express.Router();


// Route to create a new contact form entry - /contact_form/entries

router.post("/", checkMissingContactFormProperties, validateEmail, createContactFormEntry);


// Route to get all contact form submissions - /contact_form/entries

router.get("/", verifyToken, async (req, res) => {
   
    try {
        const contactFormMasterList = await readMasterList(entries);
        return res.status(200).json(contactFormMasterList);
    } catch (err) {
        return res.status(500).json({
            message: "Oops. Something has gone wrong. Our team has been notified."
        })
    }

}); 


// Route to get a contact form entry by id - /contact_form/entries/:id

router.get("/:id", verifyToken, getContactFormById); 



export default router;