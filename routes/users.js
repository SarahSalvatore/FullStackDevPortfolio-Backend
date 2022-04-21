import express from "express";
import { checkMissingUserProperties, createUser } from "../controllers/usersController.js";
import { validateEmail, checkPasswordLength } from "../controllers/validationController.js";


const router = express.Router();


// Route to create a new user - /users

router.post("/", checkMissingUserProperties, validateEmail, checkPasswordLength, createUser);



export default router; 