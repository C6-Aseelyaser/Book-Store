const cartModel = require("../models/cartSchema");
//-----------------check cart -------------------

//------------- check cart -------------

const checkCart = (req, res ,next) => {
  console.log("5dsfsdsdsfsd")
 let user = req.token.userId
// console.log(user)

  let book = req.body.book;
cartModel.findOne({ user, book })
    .then((results) => {
      console.log(results)
      if (results) {
        res.status(200);
        res.json({
          success: true,
          message: "already exisit",
          results: results,
        });
      } else {
        next();
      }
    })
    .catch((err) => {
      res.status(500);
      res.json({
        success: false,
        message: "error",
        err: err.message,
      });
    });
};

module.exports = checkCart;
