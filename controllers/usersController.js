import { generateUserId, hashForOnceAndForAll } from "./validationController.js";
import { readMasterList, users, addNewItemToFile } from "../controllers/databasehandler.js";
import { promises as fs } from 'fs';


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

// export const createUser = async (req, res) => {
    
//     const { name, email, password } = req.body;
//     let hashedPassword = await hashForOnceAndForAll(password);

//     let newUserSubmission = {
//         id: generateUserId(), 
//         name: name,
//         email: email,
//         password: hashedPassword
//     };

//     try {
//         let usersMasterList = await readMasterList(users);
//         usersMasterList.push(newUserSubmission);
//         await addNewItemToFile(users, JSON.stringify(usersMasterList));
//         return res.status(201).json(newUserSubmission);

//     } catch (err) {
//         return res.status(500).json({
//             message: "Oops. Something has gone wrong. Our team has been notified."
//         })
//     }
    
// }


export const createUser = async (req, res) => {
    
    const { name, email, password } = req.body;

    // checks if user already exists.
    try {
        const usersMasterList = await readMasterList(users);
        const foundUser = usersMasterList.find((user) => user.email == email);

        if (foundUser) return res.status(400).json({
            message: `user with the email: ${email} already exists.`
        })
    } catch (err) {
            return res.status(500).json({
                message: "Oops. Something has gone wrong. Our team has been notified."
            })
    }

    let hashedPassword = await hashForOnceAndForAll(password);

    let newUserSubmission = {
        id: generateUserId(), 
        name: name,
        email: email,
        password: hashedPassword
    };

    try {
        const usersMasterList = await readMasterList(users);
        usersMasterList.push(newUserSubmission);
        await addNewItemToFile(users, JSON.stringify(usersMasterList));
        return res.status(201).json(newUserSubmission);
        
    } catch (err) {
        return res.status(500).json({
            message: "Oops. Something has gone wrong. Our team has been notified."
        })
    }
    
}