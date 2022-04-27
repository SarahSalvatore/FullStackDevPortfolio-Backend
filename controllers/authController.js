import { verifyPassword } from "./validationController.js";
import { readMasterList, users } from "./databasehandler.js";
import jwt from 'jsonwebtoken'; // json web token npm



// checks for missing required properties

export const checkRegisteredUserProperties = (req, res, next) => {
    const registeredUserProperties = [ "email", "password" ];
    let missingRegisteredUserProperties = [];

    registeredUserProperties.forEach((prop) => {
        if (!req.body.hasOwnProperty(prop)) {
            missingRegisteredUserProperties.push(prop);
        }
    })
        if (missingRegisteredUserProperties.length) {
                return res.status(400).json({
                    message: "validation error",
                    invalid: missingRegisteredUserProperties})
            };
            next();
        }


// checks if user is a registered user and provides jwt token

export const isRegisteredUser = async (req, res, next) => {

    const { email, password } = req.body;

    try {
        const usersMasterList = await readMasterList(users);
        const foundUser = usersMasterList.find((user) => user.email == email);
        let isValidPassword = await verifyPassword(foundUser.password, password);
    
        if (foundUser && isValidPassword) {

            const accessToken = jwt.sign(
                { email },
                `${process.env.ACCESS_TOKEN_SECRET}`,
                { expiresIn: "900s" } 
            )
            return res.status(200).json({
                token: accessToken
            })
        } return res.status(401).json({ message: "incorrect credentials provided" }) 
        
    } catch (err) {
        return res.status(500).json({
            message: "Oops. Something has gone wrong. Our team has been notified."
        })
    }
}