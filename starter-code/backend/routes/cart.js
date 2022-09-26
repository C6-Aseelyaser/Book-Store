const express = require('express');
const { createNewCart } = require('../controllers/cart');

const authentication =require('../middlewares/authentication');
const authorization =require('../middlewares/authorization');

const cartRouter = express.Router();
cartRouter.post("/",authentication,authorization("CREATE_CART"),createNewCart);

module.exports = cartRouter;