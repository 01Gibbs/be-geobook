import server from "express";
import { getBooks } from "../controllers/books-controllers";

const booksRouter = server.Router();

booksRouter.get("/", getBooks);

export default booksRouter;
