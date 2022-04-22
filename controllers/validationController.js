import { v4 as uuidv4 } from 'uuid'; // id generator npm
import * as argon2 from 'argon2'; // hash npm
import jwt from 'jsonwebtoken'; // json web token npm



// placeholder for users database

export let usersMasterList = [

    {
        "id": "15fa0fa2-8101-492a-951f-d553454abfcc",
        "name": "Sarah Doe",
        "email": "124@gmail.com",
        "password": "$2b$10$UzuYZR.EPGfBnfzzUF6BEesHYlhlDMF0IioXXUUZGLA.NyYKHE5V."
      },

      {
        "id": "5ec08fa1-2132-420c-9569-bd335268a95b",
        "name": "Sarah Doe",
        "email": "thisisnot@gmail.com",
        "password": "$2b$10$log09LGLxW4V6aRO/yeYceU/OqlylxC6GmFGX8YX3V3EEh3a07v2."
      },

      {
        "id": "d02153a5-ca48-4072-8971-22c639acfdf9",
        "name": "Jane Doe",
        "email": "doe-ray-mi@gmail.com",
        "password": "$argon2i$v=19$m=4096,t=3,p=1$zpNNF9qyyWsdaCqbwOIxEg$s0PP36nbjw3zVjWhjt9wpd/krcKu4zxtfjrRblAbBTY"
      }

  ];


// placeholder for contact form database

export let contactFormMasterList = [];


// validates email address

export const validateEmail = (req, res, next) => {

    let email = req.body.email;
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
    
    if (!regex.test(email)) {
                return res.status(400).json({message:"invalid email address"});
    }
    next();
}


// checks password length (minimum 8 characters)

export const checkPasswordLength = (req, res, next) => {

    let password = req.body.password;
    if (password.length < 8) {
        return res.status(400).json({message: "password must be at least 8 characters."})
    }
    next();
    }


// generates ID number

export const generateUserId = () => uuidv4()


// Argon2 salts and hashes password (asynchronous method)

export const hashForOnceAndForAll = async (password) => {

    try {
        const hash = await argon2.hash(password);
        return hash;
    } catch {
        return res.status(500).json({message: "internal error. Cannot fulfill request"})
    }
}


// Argon2 verifies a password 

export const verifyPassword = async (hashOnFile, enteredPassword) => {

    try {
        if (await argon2.verify(hashOnFile, enteredPassword)) {
          return true;
        } else {
            return false;
        }
      } catch (err) {
            return res.status(500).json({ message: "internal error. Cannot fulfill request"})
      }

}


export const authenticateToken = (req, res, next) => {
    
    const bearerAuth = req.headers[ "Authorization" ];
    const bearerToken = bearerAuth.split(" ")[1];

    if (bearerToken == null) { 
        return res.status(403).json({
        message: "Are you getting stuck at null" })
    }
    jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
        if (err) {
            return res.status(403).json({
                message: "or stuck at verify."
            })
        }
        req.token = token
    })
    next();
}

// creates json web token

// export const createToken = () => {
//     let jwtSecretKey = process.env.JWT_SECRET_KEY;
//     let payload = {
//         time: Date(),
//         userId: 15
//     }

//     const token = jwt.sign(payload, jwtSecretKey);
//     return token;
// }


// verify json web token

// export const verifyToken = (req, res, next) => {

//     const bearerHeader = req.headers["Authorization"];
//     if (typeof bearerHeader !== "undefined") {

//         const bearerToken = bearerHeader.split(" ")[1];
    
//         jwt.verify(bearerToken, ACCESS_TOKEN_SECRET);
    
//         next();
    
//       } else {
    
//         res.status(403).json({
//             message: "token is not valid"
//         });
    
//       }

// }


// export const verifyToken = (req, res, next) => {
//     const token = req.headers["Authorization"];

//     if (token) {
//         const decode = jwt.verify(token, ACCESS_TOKEN_SECRET)
//         console.log(decode)
//     } else {
//         console.log("errorerrorerror")
//     }
//     next()
// }

export const verifyToken = (req, res, next) => {

        const bearerToken = req.headers.authorization.split(' ')[1]

        if (bearerToken !== "undefined") {
        
        jwt.verify(bearerToken, `${process.env.ACCESS_TOKEN_SECRET}`, (err, authData) => {
            if (err) {
                res.status(403).json({
                    message: "valid token not provided"
                })
            }
            else {
                res.status(200).json({
                    message: authData
                })
            }
        })

    } else {
        res.status(403).json({
            message: "valid token not provided"
        })
    }
}

