require("dotenv").config();
const mongoose = require("mongoose");
const testBooks = require("./testData/bookData");
const testUsers = require("./testData/userData");
const userSchema = require("../model/user");
const bookModel = require("../model/book");

const mongoString = process.env.DATABASE_URL;

mongoose
  .connect(mongoString)
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => console.log(err));

const seedDB = async () => {
  await userSchema.deleteMany({});
  await userSchema.insertMany(testUsers);
  //   await bookModel.deleteMany({});
  //   await bookModel.insertMany(testBooks);
};

module.exports = seedDB;

mongoose.Collection.drop();
