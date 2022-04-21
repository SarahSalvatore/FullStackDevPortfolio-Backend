import { usersMasterList, verifyPassword, createToken } from "./validationController.js";



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


// export const isRegisteredUser = (req, res, next) => {
//     const { email, password } = req.body;
//     const foundUser = usersMasterList.find((user) => user.email == email);
//     const isValidPassword = bcrypt.compareSync(password, foundUser.password)
    
//     if (foundUser && isValidPassword) {
//         return res.status(200).json({
//             message: "Correct credentials provided"
//         })
//     } else {
//         return res.status(401).json({
//             message: "incorrect credentials provided"
//         })
//     } 
// }


export const isRegisteredUser = async (req, res, next) => {

    const { email, password } = req.body;
    const foundUser = usersMasterList.find((user) => user.email == email);
    let isValidPassword = await verifyPassword(foundUser.password, password);
    
    if (foundUser && isValidPassword) {
        return res.status(200).json({
            token: createToken()
        })
    } else {
        return res.status(401).json({
            message: "incorrect credentials provided"
        })
    } 
}

// give me a username and password, if i can find a match/accurrcay ill give you a token.

// give me a token, ill make sure its a valid token


// part 2 is due before next class. 

// part 3 will be a working session. and due a week after the course is done.

// 