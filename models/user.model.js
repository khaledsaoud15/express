const mongoose = require("mongoose");

const user = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      min: 5,
    },
    address: {
      city: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", user);
