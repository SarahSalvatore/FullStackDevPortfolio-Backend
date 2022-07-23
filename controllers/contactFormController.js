import { generateUserId } from "./validationController.js";
import {
  readMasterList,
  entries,
  addNewItemToFile,
} from "./databasehandler.js";

// checks for missing required properties

export const checkMissingContactFormProperties = (req, res, next) => {
  const requiredContactFormProperties = ["name", "email", "message"];
  let missingContactFormProperties = [];

  requiredContactFormProperties.forEach((prop) => {
    if (!req.body.hasOwnProperty(prop)) {
      missingContactFormProperties.push(prop);
    }
  });
  if (missingContactFormProperties.length) {
    return res.status(400).json({
      message: "validation error",
      invalid: missingContactFormProperties,
    });
  }
  next();
};

// creates a new contact form entry

export const createContactFormEntry = async (req, res) => {
  let newContactFormSubmission = {
    id: generateUserId(),
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };

  try {
    let contactFormMasterList = await readMasterList(entries);
    contactFormMasterList.push(newContactFormSubmission);
    await addNewItemToFile(entries, JSON.stringify(contactFormMasterList));
    return res.status(201).json(newContactFormSubmission);
  } catch (err) {
    return res.status(500).json({
      message: "Oops. Something has gone wrong. Our team has been notified.",
    });
  }
};
