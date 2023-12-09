const mongoose = require("mongoose");

const product = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 10,
      max: 25,
    },
    description: {
      type: String,
      required: true,
      min: 15,
      max: 100,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      required: true,
    },
    sizes: {
      type: Array,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Product", product);
