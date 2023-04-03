const bookData = require('./testData/bookData.js')
const books = require('../model/book.js')
const users = require('../model/user.js')
const userData = require('./testData/userData.js')

const seedDB = async () => {
  await books.collection.drop({})
  await books.insertMany(bookData)
  await users.collection.drop({})
  await users.insertMany(userData)
}

module.exports = seedDB
