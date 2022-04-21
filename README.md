# CSFS1020 Course Project - RESTFUL API SERVER

The scope of this project consisted of creating a RESTful JSON API backend server for a future contact form.

## Definitions

- **API**- Application Programming Interface
- **REST**- REpresentational State Transfer
- **CRUD**- CRUD is an acronym for Create Read Update Delete, a set of rules to follow when building an API.
- **JSON**- Javascript Object Notation. It is a common format for sending and requesting data through a REST API.
- **HTTP**- Hypertext Transfer Protocol. It gives users a way to interact with web resources by transmitting hypertext messages between clients and servers.

## How to Run

- **Start**: server.js

- **Terminal**: Start server in terminal with command: nodemon server.js || node server.js

- **Local Port**: This server runs locally at: **http://localhost:5000**

## Dependencies

- **Node** - ( npm init - y ) - Server runtime environment
- **Express** - ( npm i express ) - Web application framework
- **JSON Web Token** - ( npm i jsonwebtoken ) - Used to create JSON web tokens
- **UUID** - ( npm i uuid ) - Used to generate id numbers
- **Dotenv** - ( npm i dotenv ) - Automatically loads environment variables from .env file
- **Argon2** - ( npm i argon2 ) - Used to hash user passwords

## Dev Dependencies

- **Nodemon** - ( npm i --save-dev nodemon ) - Used to automatically refresh server.

## HTTP Methods

- **GET**- pulls/gets data from the backend.
- **PUT**- adds new data.
- **POST**- updates data.
- **PATCH**- updates partial data.
- **DELETE** - deletes data.

## HTTP Codes

The following HTTP codes have been used within this project.

- **200** - Okay
- **201** - Accepted
- **400** - Bad Request
- **401** - Unauthorized
- **403** - Forbidden
- **404** - Not Found
- **500** = Internal Server Error

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
