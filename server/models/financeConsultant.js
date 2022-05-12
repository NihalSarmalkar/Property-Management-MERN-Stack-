const mongoose = require("mongoose");

const financeConsultantSchema = new mongoose.Schema({
  usertype: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  contact: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  urls: {
    type: Array,
    default: []
  },
  action:{
    type:Boolean,
    default: false
  },
  modified:{
    type:Boolean,
    default: false
  }
});

const FinanceConsultant = mongoose.model("financeConsultant", financeConsultantSchema);

module.exports = FinanceConsultant;
