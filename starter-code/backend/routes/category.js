const express = require("express");
const { createNewCatogory,getAllCategory } = require("../controllers/category");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const categoryRouter = express.Router();

categoryRouter.post("/",authentication,authorization("CREATE_CATEGORY"),createNewCatogory);
categoryRouter.get("/",authentication,getAllCategory);

module.exports = categoryRouter;
