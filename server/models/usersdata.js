const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String,required: false  },
  },
  { timestamps: true }
);


const usersdata = mongoose.model("usersdata", UsersSchema);

module.exports = usersdata;