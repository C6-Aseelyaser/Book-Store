const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  age: { type: Number },
  country: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "role" },
});
//----register----- **require bcrypt**

userSchema.pre("save", async function () {
  console.log(this);
  this.password = await bcrypt.hash(this.password, 5);
  this.email = this.email.toLowerCase();
});

module.exports = mongoose.model("user", userSchema);