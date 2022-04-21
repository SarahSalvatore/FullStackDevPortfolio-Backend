import express from "express";
import { checkRegisteredUserProperties, isRegisteredUser } from "../controllers/authController.js";

const router = express.Router();


// route to create a JWT upon registered user login.

router.post("/", checkRegisteredUserProperties, isRegisteredUser);


export default router;