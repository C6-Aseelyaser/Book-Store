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
//------------- create all cart -------------
const getAllCart = (req, res) => {
  cartModel
    .find()
    .populate("book", "price -_id").select(" -_id")
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
        err:err.message,
      });
    });
};
//------------------------------------------
module.exports = { createNewCart,getAllCart };

//CRUD   ..> CART
// iduser
// idbook
// total
