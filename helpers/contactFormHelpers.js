import db from "../db.js";
import {
  checkForMissingProperties,
  validateEmail,
} from "./validationHelpers.js";

// Validate form information
export const validateFormInfo = (req, res, next) => {
  const requiredProperties = ["name", "email", "message"];
  const email = req.body.email;
  checkForMissingProperties(requiredProperties, req.body);
  validateEmail(email);
  next();
};

// Create a new form
export const createNewForm = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const date = db.query(
    "INSERT INTO contact_form (name, email, message, dateReceived) VALUES (?, ?, ?, ?)",
    [name, email, message, date],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        result.status(200).json({
          message: "New form has been submitted",
        });
      }
    }
  );
};
