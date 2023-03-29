import server from "express";
import { getUser, getUsers } from "../controllers/users-controllers";

const usersRouter = server.Router();

usersRouter.get("/", getUsers);

//Get by Username Method
usersRouter.get("/:username", getUser);

export default usersRouter;
