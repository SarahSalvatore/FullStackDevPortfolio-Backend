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
