const express = require('express');
const { getBookById } = require('../controllers/books');
const { createNewCart,getAllCart,updateCartById,deleteCartById,getCartById} = require('../controllers/cart');

const authentication =require('../middlewares/authentication');
const authorization =require('../middlewares/authorization');

const cartRouter = express.Router();
cartRouter.post("/",authentication,authorization("CREATE_CART"),createNewCart);
cartRouter.get("/",authentication,getAllCart);
cartRouter.put("/:id",authentication,authorization("UPDATE_CART"),updateCartById);
cartRouter.delete("/:id",authentication,authorization("DELETE_CART"),deleteCartById);
cartRouter.get("/search_2",getCartById)


module.exports = cartRouter;