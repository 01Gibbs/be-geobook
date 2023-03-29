import server from "express";
import { getUser, getUsers, postUser } from "../controllers/users-controllers";

const usersRouter = server.Router();

usersRouter.route("/").get(getUsers).post(postUser);

//Get by Username Method
usersRouter.route("/:username").get(getUser);

export default usersRouter;
