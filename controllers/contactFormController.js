import { generateUserId, contactFormMasterList } from "./validationController.js"
import jwt from 'jsonwebtoken'; // json web token npm


// checks for missing required properties

export const checkMissingContactFormProperties = (req, res, next) => {

    const requiredContactFormProperties = [ "name", "email", "phoneNumber", "content" ];
    let missingContactFormProperties = [];

    requiredContactFormProperties.forEach((prop) => {
        if (!req.body.hasOwnProperty(prop)) {
                missingContactFormProperties.push(prop);
        }
    })
        if (missingContactFormProperties.length) {
                return res.status(400).json({
                    message: "validation error",
                    invalid: missingContactFormProperties })
            };
    next();
        }


// creates a new contact form entry

export const createContactFormEntry = (req, res) => {

    let newContactFormSubmission = { id: generateUserId(), ...req.body };
    contactFormMasterList.push(newContactFormSubmission);
        return res.status(201).json(newContactFormSubmission);
}


// returns master list of contact form entries from jwt token

export const getContactFormSubmissions = () => {
    return contactFormMasterList;
}


// returns a contact form entry by id

export const getContactFormById = (req, res) => {

    const contactFormEntry = contactFormMasterList.find((entry) => entry.id === parseInt(req.params.id))
    if (!entry) {
        return res.status(404).json({message: `Contact form entry with id: ${req.params.id} not found.`})
    } 
return res.json(contactFormEntry)
}

