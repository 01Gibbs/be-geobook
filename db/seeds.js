import bookData from './testData/dataGenerators/bookDataGeneration.js'
import booksModel from '../model/book.js'
import userModel from '../model/user.js'
import userData from "./testData/dataGenerators/userDataGeneration.js"

const seedDB = async () => {
  await booksModel.collection.drop({});
  await booksModel.insertMany(bookData);
  await userModel.collection.drop({});
  await userModel.insertMany(userData);
};

export default seedDB;
