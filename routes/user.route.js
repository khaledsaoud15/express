const User = require("../models/user.model");

// Register
const register = async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();

  try {
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { register };
