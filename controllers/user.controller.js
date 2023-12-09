const { register } = require("../routes/user.route");

const router = require("express").Router();

router.post("/users", register);

module.exports = router;
