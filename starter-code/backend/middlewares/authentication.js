const jwt = require("jsonwebtoken");
const authentication = (req, res, next) => {
  //get token sent
  //console.log(req.headers.authorization);
  if (req.headers.authorization === undefined) { 
    res.status(403);
    res.json({
      success: false,
      message: "Forbidden",
    });
    return;
  }

  const token = req.headers.authorization.split(" ").pop();

  const secretKey = process.env.SECERT;

  //console.log(authentication);
  //console.log(token);
  //console.log(secretKey);

  jwt.verify(token, secretKey, (err, result) => {
    if (err) {
      //isn't sent
      res.status(403),res.json({
          success: false,
          message: "The token is invalid or expired",
        });
      return;
    } else {
        req.token = result;
        next();
    }
  });
};


module.exports = authentication;
