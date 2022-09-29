let roleModel = require("../models/roleSchema");


//------------create role -----------------
// console.log(5)
const role = (req, res) => {
  
  const roleId = req.params.roleId;
  // console.log(roleId);
  const { role, permissions } = req.body;
  const roleModelInstance = new roleModel({
    role,
    permissions
  });
  roleModelInstance
    .save()
    .then((result) => {
      // console.log(result);
      res.status(201);
      res.json({
        success: true,
        massage: "Success role created",
        role: result,

      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        success: false,
        message: "Server Error",
      });
    });
};
module.exports = { role };