const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const cartschema = new mongoose.Schema({
    user:{ type: mongoose.Schema.Types.ObjectId, ref: "user" },
    book:{type:mongoose.Schema.Types.ObjectId, ref:"book" },
    quantity:{type: Number}
});

module.exports = mongoose.model("cart", cartschema);