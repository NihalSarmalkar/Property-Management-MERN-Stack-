const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema({
  usertype: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  projecttype: {
    type: String,
    required: false,
  },
  subcategory: {
    type: String,
    required: false,
  },
  employementyear: {
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
});

const Attendee = mongoose.model("attendee", attendeeSchema);

module.exports = Attendee;
