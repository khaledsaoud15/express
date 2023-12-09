const Product = require("../models/product.model");

// CRUD OPERATIONS

// POST REQUEST
const addProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();

  try {
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addProduct };
