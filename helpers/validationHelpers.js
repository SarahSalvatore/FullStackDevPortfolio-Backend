import * as argon2 from "argon2";
import jwt from "jsonwebtoken";

// Check for missing required properties
export const checkForMissingProperties = (
  requiredProperties,
  providedProperties
) => {
  let missingProperties = [];

  requiredProperties.forEach((prop) => {
    if (!providedProperties.hasOwnProperty(prop)) {
      missingProperties.push(prop);
    }
  });
  if (missingProperties.length) {
    return res.status(400).json({
      message: "validation error",
      invalid: missingProperties,
    });
  }
};

// Validate email address
export const validateEmail = (email) => {
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }
};

// Hash password
export const hashPassword = async (password) => {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch {
    return res
      .status(500)
      .json({ message: "Error encountered when hashing password." });
  }
};

// Verify Password
export const verifyPassword = async (hashOnFile, enteredPassword) => {
  try {
    if (await argon2.verify(hashOnFile, enteredPassword)) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error encountered. Could not verify password." });
  }
};

// Verify JSON token
export const verifyToken = (req, res, next) => {
  const bearerToken = req.headers.authorization.split(" ")[1];

  if (bearerToken !== "undefined") {
    jwt.verify(
      bearerToken,
      `${process.env.ACCESS_TOKEN_SECRET}`,
      (err, authData) => {
        if (err) {
          res.status(403).json({ message: "valid token not provided" });
        } else {
          next();
        }
      }
    );
  } else {
    res.status(403).json({ message: "valid token not provided" });
  }
};
