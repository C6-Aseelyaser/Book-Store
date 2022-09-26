const express = require("express");
const { createNewCatogory,getAllCategory } = require("../controllers/category");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const categoryRouter = express.Router();
categoryRouter.post("/",authentication,authorization("CREATE_CATOGORY"),createNewCatogory);
categoryRouter.get("/",getAllCategory);

module.exports = categoryRouter;
