
const {
  getBooks,
  getBook,
  postBook,
  deleteBook,
} = require("../controllers/books-controllers.js");

const booksRouter = require('express').Router()

booksRouter.route("/").get(getBooks).post(postBook);

//Get by Username Method
booksRouter.route("/:id").get(getBook).delete(deleteBook);

module.exports = booksRouter;
