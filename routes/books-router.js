import server from "express";
import { getBooks, getBook } from "../controllers/books-controllers";

const booksRouter = server.Router();

booksRouter.route("/").get(getBooks);

//Get by Username Method
booksRouter.route('/:id').get(getBook)

export default booksRouter;
