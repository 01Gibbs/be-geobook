require("dotenv").config();
const mongoose = require("mongoose");
const testBooks = require("./testData/bookData");
const booksModel = require("../model/book");
const testUsers = require("./testData/userData");
const userModel = require("../model/user");

const mongoString = process.env.DATABASE_URL;

mongoose
  .connect(mongoString)
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => console.log(err));

const seedDB = async () => {
  await booksModel.collection.drop({});
  await booksModel.insertMany(testBooks);
  await userModel.collection.drop({});
  await userModel.insertMany(testUsers);
};

module.exports = seedDB;
