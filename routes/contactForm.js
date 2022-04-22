import express from "express";
import jwt from 'jsonwebtoken'; // json web token npm
import { checkMissingContactFormProperties, createContactFormEntry, getContactFormSubmissions, getContactFormById } from "../controllers/contactFormController.js";
import { validateEmail, authenticateToken, verifyToken } from "../controllers/validationController.js";


const router = express.Router();


// Route to create a new contact form entry - /contact_form/entries

router.post("/", checkMissingContactFormProperties, validateEmail, createContactFormEntry);


// Route to get all contact form submissions - /contact_form/entries

router.get("/", verifyToken); 


// Route to get a contact form entry by id - /contact_form/entries/:id

router.get("/:id", getContactFormById); 



export default router;