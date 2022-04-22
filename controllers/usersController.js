import { generateUserId, usersMasterList, hashForOnceAndForAll } from "./validationController.js";


// checks for missing required properties

export const checkMissingUserProperties = (req, res, next) => {

    const requiredUserProperties = [ "name", "email", "password" ];
    let missingUserProperties = [];

    requiredUserProperties.forEach((prop) => {
        if (!req.body.hasOwnProperty(prop)) {
            missingUserProperties.push(prop);
        }
    })
        if (missingUserProperties.length) {
                return res.status(400).json({
                    message: "validation error",
                    invalid: missingUserProperties})
            };
            next();
        }


// creates a new user

export const createUser = async (req, res) => {
    
    const { name, email, password } = req.body;
    let hashedPassword = await hashForOnceAndForAll(password);

    let newUserSubmission = {
        id: generateUserId(), 
        name: name,
        email: email,
        password: hashedPassword
    };
    usersMasterList.push(newUserSubmission);
        return res.status(201).json(newUserSubmission);
}