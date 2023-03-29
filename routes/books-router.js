import server from "express";
import { getBooks } from "../controllers/books-controllers";

const booksRouter = server.Router();

booksRouter.route("/").get(getBooks);

export default booksRouter;
