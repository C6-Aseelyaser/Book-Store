const cartModel = require("../models/cartSchema");
//CRUD   ..> CART
// iduser
// idbook
// total
//? update & delete all cart
//------------- create new cart -------------
const createNewCart = (req, res) => {
  const {  book, quantity } = req.body;
  
  // console.log(req.token)
  const cartModelInstance = new cartModel({
    user:req.token.userId,
    book,
    quantity,
  });
  cartModelInstance
    .save()
    .then((result) => {
      if (result) {
        res.status(200);
        res.json({
          success: true,
          message: "cart created",
          cart: result,
        });
      }else  {
        throw Error;
      }
    })
    .catch((err) => {
      res.status(500);
      res.json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};



//------------- get all cart -------------..>dont need get all cart ..jsut getById
const getAllCart = (req, res) => {
  cartModel
    .find()
    .populate("book") //, "price -_id"
    .exec()
    .then((result) => {
      res.status(200);
      res.json({
        success: true,
        message: "All the cart",
        cart: result,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};
//------------- update cart by id-------------
const updateCartById = (req, res) => {
  const cartId = req.params.id;
  const cartUpdated = req.body;
  Object.keys(cartUpdated).forEach((element, index) => {
    cartUpdated[element] == "" && delete cartUpdated[element];
  });
  cartModel
    .findByIdAndUpdate(cartId, req.body, { new: true })
    .then((result) => {
      if (result === undefined) {
        return res.status(404).json({
          success: false,
          message: `The Book : ${cartId} is not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `Book updated`,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
//------------- delete cart by id-------------
const deleteCartById = (req, res) => {
  const cartId = req.params.id;
  cartModel
    .findByIdAndDelete(cartId)
    .then((result) => {
      if (result === undefined) {
        return res.status(404).json({
          success: false,
          message: `The cart: ${cartId} is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `cart deleted`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
//------------- get cart By Id -------------
const getCartById = (req, res) => {
  cartId = req.query.id;
  // console.log(cartId);
  cartModel
    .findById(cartId)
    .populate("book") //, "price -_id"
    .exec()
    .then((result) => {
      if (result === undefined) {
        return res.status(404).json({
          success: false,
          message: `The cart is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The cart ${cartId} `,
        cart: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
//here we need to getAllUserCartbyId
//-------------getUserCartbyId -------------
const getUserCartbyId = (req, res) => {
  const userId = req.token.userId;
  // console.log(userId)
  cartModel
    .find({ user: userId })
    .populate("book") //, "-_id"
    .exec()
    .then((cart) => {
      // console.log(cart)
      if (cart.length) {
        //
        res.status(200).json({
          success: true,
          message: `user cart`,
          userId: userId,
          cart: cart,
        });
      } else {
        res.status(200).json({
          success: false,
          message: `not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

//------------------------------------------
module.exports = {
  createNewCart,
  getAllCart,
  updateCartById,
  deleteCartById,
  getCartById,
  getUserCartbyId,
};
