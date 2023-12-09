const { addProduct } = require("../routes/product.route");

const router = require("express").Router();

router.post("/products", addProduct);

module.exports = router;
