const mongoose = require("mongoose");

const adminAwardSchema = new mongoose.Schema({
  rewardtitle: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  rewardpoint: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  awardsclaimed: {
    type: String,
    required: false,
  },
  description: {
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
  }
 
});

const AdminAward = mongoose.model("adminAward", adminAwardSchema);

module.exports = AdminAward;
