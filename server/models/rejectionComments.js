const { application } = require("express");
const mongoose = require("mongoose");

const rejectionContentSchema = new mongoose.Schema({
  caseId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    max: 500,
  },
});

const Rejectioncontent = mongoose.model("rejectioncontent", rejectionContentSchema);

module.exports = Rejectioncontent;
