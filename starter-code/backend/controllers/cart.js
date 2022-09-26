const cartModel = require("../models/cartSchema");

//------------- create new cart -------------
const createNewCart = (req, res) => {
  const { user, book, quantity } = req.body; //q
  const cartModelInstance = new cartModel({
    user,
    book,
    quantity,
  });
  cartModelInstance.save().then((result) => {
    res.status(201);
    res
      .json({
        success: true,
        message: "cart created",
        cart: result,
      })
      .catch((err) => {
        res.status(500);
        res.json({
          success: false,
          message: "Server Error",
          err: err.message,
        });
      });
  });
};
//------------- get all cart -------------
const getAllCart = (req, res) => {
  cartModel
    .find()
    .populate("book", "price -_id")
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
      res.staus(500);
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
        if (result===undefined) {
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
//------------------------------------------
module.exports = { createNewCart, getAllCart, updateCartById,deleteCartById};

//CRUD   ..> CART
// iduser
// idbook
// total
