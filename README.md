## CSFS1020 Server Project

The scope of this project consisted of creating a RESTful JSON API backend server for a future contact form.

## How to Run

Start: server.js
Terminal: Start server in terminal with command: nodemon server.js || node server.js
Local Port: This server runs locally at: http://localhost:5000

## Dependencies

Node - ( npm init - y )
Express - ( npm i express --save )
JSON Web Token - ( npm i jsonwebtoken ) - Used to create JSON web tokens
UUID - ( npm i uuid ) - Used to generate id numbers
Dotenv - ( npm i dotenv ) -
Argon2 - ( npm i argon2 ) - Used to hash user passwords

## Dev Dependencies

Nodemon - ( npm i --save-dev nodemon ) - Used to automatically refresh server.

Rest Client VS Code Extension or Postman - Used to test routes.

Rest Client allows you to run route tests via the test.rest file in the project directly in your code editor. An example syntax is included below. Once test parameters are entered, press 'Send Request' button.

POST http://localhost:3000/contact_form/entries
Content-Type: application/json

{
"key": "value",
"key": "value",
"key": "value",
"key": "value"
}

## HTTP Methods

GET - pulls/gets data from the backend.
PUT - adds new data.
POST - updates data.
PATCH - updated partial data.
DELETE - deletes data.

## HTTP Codes

The following HTTP codes have been used via the routes outlined in userRoutes.js.

200 - Okay
201 - Accepted
400 - Bad Request
401 - Unauthorized
403 - Forbidden
404 - Not Found
500 = Internal Server Error

## Package Setup

This project contains a package.json file and a package-lock.json file.
Node modules, .env and other items have been included in a .gitignore file.

## Contributions

Private repository. Pull requests are welcomed from project members.

## License

ISC License

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
Source: http://opensource.org/licenses/ISC
