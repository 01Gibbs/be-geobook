import server from "express";
import usersRouter from "./users-router";
import booksRouter from "./books-router";

const apiRouter = server.Router();

apiRouter.use("/users", usersRouter);

apiRouter.use("/books", booksRouter);

export default apiRouter;
