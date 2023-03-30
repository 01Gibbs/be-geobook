import server from "express";
import usersRouter from "./users-router.js";
import booksRouter from "./books-router.js";

const apiRouter = server.Router();

apiRouter.use("/users", usersRouter);

apiRouter.use("/books", booksRouter);

export default apiRouter;
