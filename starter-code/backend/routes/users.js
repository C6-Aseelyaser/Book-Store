const express = require("express");
const { register, login } = require("../controllers/users");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const usersRouter = express.Router();

usersRouter.post("/", register);
usersRouter.post("/login", login);

module.exports = usersRouter;

