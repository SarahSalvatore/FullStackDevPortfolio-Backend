import { generateUserId, contactFormMasterList } from "./validationController.js"


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


// returns a contact form entry by id

export const getContactFormById = (req, res) => {

    const { id } = req.params;

    if (!id ) {
        res.status(400).json({ message: "id not provided" })
    } else {
        const contactFormEntry = contactFormMasterList.find((form) => parseInt(form.id) === parseInt(id));
        if (!contactFormEntry) {
            return res.status(404).json({ message: `Contact form entry with id ${id} not found` })
        }
        return res.status(200).send(contactFormEntry)
    }
}