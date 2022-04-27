const mongoose = require("mongoose");

const userManagementModelSchema = new mongoose.Schema({
  usertype: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  caseQuota: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const userManagementModel = mongoose.model("userManagementModel", userManagementModelSchema);

module.exports = userManagementModel;
