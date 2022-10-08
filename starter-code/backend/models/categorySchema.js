const mongoose = require("mongoose");

const catogorySchema = new mongoose.Schema({
  title: { type: String },
});

module.exports = mongoose.model("category", catogorySchema);

