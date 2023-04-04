const {
  getUser,
  getUsers,
  postUser,
  patchUser,
} = require("../controllers/users-controllers.js");

const usersRouter = require('express').Router()

usersRouter.route("/").get(getUsers).post(postUser);

//Get by Id Method
usersRouter.route("/:id").get(getUser).patch(patchUser);

module.exports = usersRouter;
