const categoryModel = require("../models/categorySChema");


//------------- createNewCatogory ------------
//++  the cause ..>FORBIDEN
const createNewCatogory = (req, res) => {
    const catogoryId = req.params.catogoryId;
    const { title} = req.body;   
    const catogoryModelInstance = new catogoryModel({
      title
    });
    catogoryModelInstance
      .save() 
      .then((result) => {
        res.status(201);
        res.json({
          success: true,
          message: "catogory created",
          article: result,
        });
        console.log(22);
        console.log(result);
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
// const getAllCategory = (req, res) => {
//     articlesModel
//       .find()
//       .then((result) => {
//         res.status(200);
//         res.json({
//           success: true,
//           message: "All the category",
//           articles: result,
//         });
//       })
//       .catch((err) => {
//         res.status(500);
//         res.json({
//           success: false,
//           message: "Server Error",
//           err: err.message,
//         });
//       });
//   };

module.exports={createNewCatogory};


//getAllCategory