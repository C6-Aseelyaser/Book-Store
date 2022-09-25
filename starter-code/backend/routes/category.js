const express = require("express");
const { createNewCatogory } = require("../controllers/category");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const categoryRouter = express.Router();
categoryRouter.post(
  "/",
  authentication,
  authorization("CREATE_CATOGORY"),  //..> "CREATE_CATOGORY"
  createNewCatogory
);

module.exports = categoryRouter;
