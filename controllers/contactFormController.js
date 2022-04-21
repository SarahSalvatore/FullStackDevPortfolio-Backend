import { generateUserId, contactFormMasterList } from "./validationController.js"



// checks for missing required contact form properties

export const checkMissingContactFormProperties = (req, res, next) => {

    const requiredContactFormProperties = [ "name", "email", "phoneNumber", "content" ];
    let missingContactFormProperties = [];

    requiredContactFormProperties.forEach((prop) => {
        if (!req.body.hasOwnProperty(prop)) {
                missingContactFormProperties.push(prop);
        }
    })
        if (missingContactFormProperties.length) {
                return res.status(400).json({
                    message: "validation error",
                    invalid: missingContactFormProperties})
            };
    next();
        }


// creates a new contact form entry

export const createContactFormEntry = (req, res) => {

    let newContactFormSubmission = {id: generateUserId(), ...req.body};
    contactFormMasterList.push(newContactFormSubmission);
        return res.status(201).json(newContactFormSubmission);
}


// returns master list of contact form entries

export const getContactFormSubmissions = () => {}



// returns a contact form entry by id

export const getContactFormById = (req, res) => {

    const contactFormEntry = contactFormMasterList.find((entry) => entry.id === parseInt(req.params.id))
    if (!entry) {
        return res.status(404).json({message: `Contact form entry with id: ${req.params.id} not found.`})
    } 
return res.json(contactFormEntry)
}










// Type: GET
// Access: Private
// Description: route to return all contact form submissions when user has valid JWT token.

// Okay HTTP Code: 200
// Forbidden HTTP Code: 403

// router.get("/contact_form/entries", (req, res) => {
    
//     const { token } = req.body;
//     let authorizedToken = "To be determined";
    
//     if (token == authorizedToken) {
//     return res.status(200).json(contactFormMasterList);
//     } else {
//     return res.status(403).json({message: "token not provided"});
// }
// })


// Tupe: GET
// Access:
// Description: route to return a contact form submission when id and JWT are provided.

// Okay HTTP Code: 200
// Bad Request HTTP Code: 400
// Forbidden HTTP Code: 403
// Not Found HTTP Code: 404

// router.get("/contact_form/entries/:id", (req, res) => {

//     const enteredUserId = parseInt(req.params.id);
//     const enteredUserToken = req.body;
//     const requiredUserToken = "to be determined";

//     if (!(enteredUserId && enteredUserToken)) res.status(400).send("All input is required to log in.");

//     if(enteredUserToken === requiredUserToken) {
//         contactFormMasterList.find((user) => {
//             if (enteredUserId == user.id) {
//                 return res.status(200).json(user);
//             } return res.status(404).json({message: `user ${enteredUserId} not found`});
//         })
//     } 
//     return res.status(403).json({message: "token not provided"});
// })
