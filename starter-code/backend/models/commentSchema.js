const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  Comment: { type: String, required: true },
  commenter:{type: mongoose.Schema.Types.ObjectId, ref:"user"}
});
module.exports = mongoose.model("comment", commentSchema);
