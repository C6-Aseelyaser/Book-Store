const express = require('express');
const { createNewCart,getAllCart,updateCartById} = require('../controllers/cart');

const authentication =require('../middlewares/authentication');
const authorization =require('../middlewares/authorization');

const cartRouter = express.Router();
cartRouter.post("/",authentication,authorization("CREATE_CART"),createNewCart);
cartRouter.get("/",authentication,getAllCart);
cartRouter.put("/:id",authentication,authorization("UPDATE_CART"),updateCartById)
module.exports = cartRouter;