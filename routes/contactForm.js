import express from "express";
import { checkMissingContactFormProperties, createContactFormEntry, getContactFormById } from "../controllers/contactFormController.js";
import { validateEmail, verifyToken, contactFormMasterList } from "../controllers/validationController.js";


const router = express.Router();


// Route to create a new contact form entry - /contact_form/entries

router.post("/", checkMissingContactFormProperties, validateEmail, createContactFormEntry);


// Route to get all contact form submissions - /contact_form/entries

router.get("/", verifyToken, (req, res) => {
    res.status(200).send(contactFormMasterList)
}); 


// Route to get a contact form entry by id - /contact_form/entries/:id

router.get("/:id", verifyToken, getContactFormById); 



export default router;