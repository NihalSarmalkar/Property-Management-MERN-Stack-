const { application } = require("express");
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  caseId: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true,
  },
  content: {
    type: String,
    max: 500,
  },
  name:{
    type: String,
    required: true,
  },
  starValue:{
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
