const authorization = (str) => {
    return (req, res, next) => {
      if (tokenPayload.role.permission.includes(str)) {
        next();
      } else {
        res.status(403).json({
          success: false,
          massage: "Unauthorized",
        });
      }
    };
  };
  
  module.exports = authorization;