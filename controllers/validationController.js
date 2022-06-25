import { v4 as uuidv4 } from "uuid"; // id generator npm
import * as argon2 from "argon2"; // hash npm
import jwt from "jsonwebtoken"; // json web token npm

// placeholder for contact form database

export let contactFormMasterList = [];

// validates email address

export const validateEmail = (req, res, next) => {
  let email = req.body.email;
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    return res.status(400).json({ message: "invalid email address" });
  }
  next();
};

// checks password length (minimum 8 characters)

export const checkPasswordLength = (req, res, next) => {
  let password = req.body.password;
  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "password must be at least 8 characters." });
  }
  next();
};

// generates ID number

export const generateUserId = () => uuidv4();

// Argon2 salts and hashes password

export const hashForOnceAndForAll = async (password) => {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch {
    return res
      .status(500)
      .json({ message: "internal error. Cannot fulfill request" });
  }
};

// Argon2 verifies a password

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
      .json({ message: "internal error. Cannot fulfill request" });
  }
};

// verifies a JSON web token

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
