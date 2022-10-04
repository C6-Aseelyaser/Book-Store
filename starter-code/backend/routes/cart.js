const express = require('express');
const { getBookById } = require('../controllers/books');
const { createNewCart,getAllCart,updateCartById,deleteCartById,getCartById,getUserCartbyId} = require('../controllers/cart');



const authentication =require('../middlewares/authentication');
const authorization =require('../middlewares/authorization');
const checkCart = require('../middlewares/cartmiddleware');

const cartRouter = express.Router();
cartRouter.post("/",authentication,checkCart,authorization("CREATE_CART"),createNewCart);
cartRouter.get("/",authentication,getAllCart);
cartRouter.put("/:id",authentication,authorization("UPDATE_CART"),updateCartById);
cartRouter.delete("/:id",authentication,authorization("DELETE_CART"),deleteCartById);
cartRouter.get("/search_2",getCartById)
cartRouter.get("/:id",authentication,getUserCartbyId);

module.exports = cartRouter;