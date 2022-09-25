const mongoose = require("mongoose");

const catogorySchema = new mongoose.Schema({
  title: { type: String },
});

module.exports = mongoose.model("category", catogorySchema);

// history:{type:String},
// business:{type:String},
// religion:{type:String},
// science:{type:String},
// math:{type:String}
