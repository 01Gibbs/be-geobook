// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });
// import dotenv.config
import {} from 'mongoose'
import bookData from './testData/bookData.js'
import bookModel from '../model/book'
import userModel from '../model/user'
import userJSONData from './testData/userData.json'
// const bookData = require("./testData/bookData");
// const userData = require("./testData/userData.js");
// const userJSONData = require("./testData/userData.json")

const mongoString = process.env.DATABASE_URL;

// const userDataParsed = JSON.parse(userJSONData).data
// console.log(userDataParsed)

mongoose
  .connect(mongoString)
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => console.log(err));

const seedDB = async () => {
  await booksModel.collection.drop({});
  await booksModel.insertMany(bookData);
  await userModel.collection.drop({});
  await userModel.insertMany(userData);
};

module.exports = seedDB;
