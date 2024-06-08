# MERN Stack Portfolio Backend

This is the backend of the MERN Stack Portfolio project. It is built with Node.js, Express, and MongoDB.

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create a `.env` file in the root directory and add the following environment variables:
   - `MONGODB_URI`: The URL of the MongoDB database
   - `JWT_SECRET_KEY`: A secret
   - `FRONTEND_API_URL`: The URL of the frontend
4. Run `npm run dev` to start the development server

## Features

- Node.js : Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
- Express : Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.
- MongoDB : MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
- Mongoose : Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
- JWT : JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
- Bcrypt : Bcrypt is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher. The bcrypt function is the default password hash algorithm for OpenBSD.
- CORS : Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.
- Dotenv : Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- ZOD : Zod is a TypeScript-first schema declaration and validation library. It is designed to be as simple as possible, and to be as fast as possible.
- Nodemon : Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.

## Folder Structure

- `src/controllers`: Contains the controller functions
- `src/middlewares`: Contains the middleware functions
- `src/models`: Contains the Mongoose models
- `src/routes`: Contains the route definitions
- `src/utils`: Contains the utility functions
- `src/validators`: Contains the validation schemas
- `src/uploads`: Contains the uploaded files
- `src/index.js`: The entry point of the application

## Environment Variables

- `MONGODB_URI`: The URL of the MongoDB database
- `JWT_SECRET_KEY`: A secret key for generating JWT tokens 
- `FRONTEND_API_URL`: The URL of the frontend

## License

This project is open source and available under the [MIT License](LICENSE).

# Getting Started with Node.js + Express

This project was bootstrapped with [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/).

## Available Scripts

In the project directory, you can run:

### `nodemon index.js`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The server will reload if you make edits.
You will also see any lint errors in the console.


# Getting Started with MongoDB

This project uses MongoDB as the database.

## Installation

1. Install MongoDB on your machine
2. Create a new database
3. Create a new collection
4. Add some documents to the collection
5. Connect to the database in your Node.js application

## MongoDB Commands

- `use database_name`: Switch to a database
- `db.createCollection('collection_name')`: Create a new collection
- `db.collection_name.insertOne({ key: value })`: Insert a document into a collection
- `db.collection_name.find()`: Find all documents in a collection
- `db.collection_name.findOne({ key: value })`: Find a document in a collection
- `db.collection_name.updateOne({ key: value }, { $set: { key: new_value } })`: Update a document in a collection
- `db.collection_name.deleteOne({ key: value })`: Delete a document from a collection
- `db.collection_name.drop()`: Drop a collection
- `db.dropDatabase()`: Drop a database
```

