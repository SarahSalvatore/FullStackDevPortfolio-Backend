import { generateUserId } from "./validationController.js"
import { readMasterList, entries, addNewItemToFile } from "./databasehandler.js";


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

export const createContactFormEntry = async (req, res) => {

    let newContactFormSubmission = { id: generateUserId(), ...req.body };

    try {
        let contactFormMasterList = await readMasterList(entries);
        contactFormMasterList.push(newContactFormSubmission);
        await addNewItemToFile(entries, JSON.stringify(contactFormMasterList));
        return res.status(201).json(newContactFormSubmission);

    } catch (err) {
        return res.status(500).json({
            message: "Oops. Something has gone wrong. Our team has been notified."
        })
    }
}


// returns a contact form entry by id

export const getContactFormById = async (req, res) => {

    const { id } = req.params;

    if (!id ) {
        res.status(400).json({ message: "id not provided" })
    } else {

            const contactFormEntries = await readMasterList(entries);
            const entry = contactFormEntries.find((form) => parseInt(form.id) === parseInt(id));
            if (!entry) {
                return res.status(404).json({ message: `contact form entry with id: ${id} not found` });
            }
            return res.status(200).send(entry);
        }
}