import server from "express";
import { getBooks, getBook, postBook } from "../controllers/books-controllers";

const booksRouter = server.Router();

booksRouter.route("/").get(getBooks).post(postBook)

//Get by Username Method
booksRouter.route('/:id').get(getBook)

export default booksRouter;
