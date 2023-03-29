import bookData from './testData/dataGenerators/bookDataGeneration.js'
import books from '../model/book.js'
import users from '../model/user.js'
import userData from "./testData/dataGenerators/userDataGeneration.js"

const seedDB = async () => {
  await books.collection.drop({});
  await books.insertMany(bookData);
  await users.collection.drop({});
  await users.insertMany(userData);
};

export default seedDB;
