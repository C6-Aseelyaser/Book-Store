const usersModel = require("../models/usersSchema");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { options } = require("../routes/books");
//-------------------register-------------------
console.log(8);
const register = (req, res) => {
  const { firstName, lastName, age, country, email, password,role } = req.body;

  const usersModelInstance = new usersModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    role
  });

  usersModelInstance
    .save()
    .then((result) => {
      console.log(result);
      res.status(201);
      res.json({
        success: true,
        message: "Account Created Successfully",
        author: result,
      });
    })
    .catch((err) => {
      res.status(409);
      res.json({ success: false, message: "The email already exists" });
      console.log(err);
    });
};

//-------------------login-------------------
console.log(40)
const login = async (req, res) => {
  const { email, password } = req.body;  
// console.log(40)
// console.log(email)
// console.log(password)
try {
    const user = await usersModel.findOne({email}) //:email.toLowerCase() 
  .populate({path:"role" , select : "-_id"})    
  .exec()
  if (!user) {
    console.log(!user)  
    res.status(404).json({ success: false,message: "The email doesn't exist" });
    return;
  }
  console.log(48)
  const storedPassword = user.password; 
  const passwordCheck = await bcrypt.compare(password, storedPassword); 
  if (!passwordCheck) {
    console.log(!passwordCheck)
    res.status(403).json({success: false, message: "The password you’ve entered is incorrect" });
    return;
  }
  //token
  const payload = {
    email,
    userId: user._id, 
    country: user.country,
    role:user.role               
  };
  
  const SECERT = process.env.SECERT; 
  const options = {
    expiresIn: "60m" ,
  };
  const token =await jwt.sign(payload, SECERT, options);
  res.status(200).json({
    success: true,
    message: "Valid login credentials",
    result:token  
  });
} catch (error) {
    res.status(409);
    res.json({ success: false, message: "The email already exists" });
    console.log(error);
}
  
};
module.exports = { register, login };




















