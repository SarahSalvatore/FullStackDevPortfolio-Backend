# CSFS1020 Course Project - RESTful API SERVER

The scope of this project consisted of creating a RESTful JSON API backend server for a future contact form.

## Definitions

- **API**- Application Programming Interface
- **REST**- REpresentational State Transfer
- **CRUD**- CRUD is an acronym for Create Read Update Delete, a set of rules to follow when building an API.
- **JSON**- Javascript Object Notation. It is a common format for sending and requesting data through a REST API.
- **HTTP**- Hypertext Transfer Protocol. It gives users a way to interact with web resources by transmitting hypertext messages between clients and servers.

## How to Run

- **Start**: node server.js

- **Dev Start**: nodemon server.js

- **Local Port**: This server runs locally at: **http://localhost:5000**

## HTTP Methods

- **GET**- pulls/gets data from the backend.
- **PUT**- adds new data.
- **POST**- updates data.
- **PATCH**- updates partial data.
- **DELETE** - deletes data.

## Routes

The following routes are available:

- **/users** - POST - creates a new user.
- **/contact_form/entries** - POST - creates an entry when user submits contact form.
- **/auth** - POST - checks for registered user and creates token.
- **/contact_form/entries** - GET - gets entries master list with a valid token.
- **/contact_form/entries/:id** - GET - gets entry by id with a valid token.

## File System

This server uses the Node file system module in its defined routes in order to read and write data. The data folder in the directory includes the following two empty json files:

- **users.json**
- **entries.json**

The following fs methods are utilized:

- **fs.readFile()** - used to read the json file specified. The default flag, **r** for reading has been used and therefore not explicitly stated. The file will open for reading.
- **fs.writeFile()** - used to write to the json file. The default flag, **w** for writing, has been used and therefore not explicitly stated. If the file does not exist, an empty file will be created. If the file does exist, the content will be replaced.

## HTTP Codes

The following HTTP codes have been used within this project.

- **200** - Okay
- **201** - Accepted
- **400** - Bad Request
- **401** - Unauthorized
- **403** - Forbidden
- **404** - Not Found
- **500** - Internal Server Error

## Package Setup

This project contains:

- A package.json file and a package-lock.json file.
- Routes can be found via the routes folder.
- Controllers can be found via the controllers folder.
- The data folder contains two empty json files (users and entries) in place of a database.
- Node modules, .env, users/entries.json, and other pertinent items have been included in a .gitignore file.

## Contributions

Private repository. Pull requests are welcomed from project members.

## License

ISC License

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
Source: http://opensource.org/licenses/ISC
