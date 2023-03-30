import bookData from './testData/bookData.js'
import books from '../model/book.js'
import users from '../model/user.js'
import userData from "./testData/userData.js"

const seedDB = async () => {
  await books.collection.drop({});
  await books.insertMany(bookData);
  await users.collection.drop({});
  await users.insertMany(userData);
};

export default seedDB;
