const categoryModel = require("../models/categorySChema");

//------------- createNewCatogory ------------  ..? need to fix
//++  the cause ..>FORBIDEN
const createNewCatogory = (req, res) => {

  const { title } = req.body;

  const catogoryModelInstance = new categoryModel({
    title,
  });
  catogoryModelInstance
    .save()
    .then((result) => {
      res.status(201);
      res.json({
        success: true,
        message: "catogory created",
        title: result,
      });
      // console.log(22);
      // console.log(result);
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
//------------- getAllCategory ------------
const getAllCategory = (req, res) => {
  // const category = req.token.userId;
  categoryModel
    .find({})
    .then((result) => {
      res.status(200);
      res.json({
        success: true,
        message: "All the category",
        title: result,
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
//--------------------------------------------
module.exports = { createNewCatogory ,getAllCategory,};




