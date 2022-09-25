const express = require('express');
const { role } = require('../controllers/role');

const authentication =require('../middlewares/authentication');
const authorization =require('../middlewares/authorization');

const roleRouter = express.Router();


roleRouter.post("/",role); //..> path ===/roles

module.exports = roleRouter;