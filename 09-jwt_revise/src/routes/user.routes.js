const { Router } = require("express");
const express = require("express");
const { userLogin } = require("../controller/user.controller");
const router = require("./protected.routes");

// const router = express.Router();

// Need to define routes here
// http://localhost:9090/users/login - POST
router.post("/login", userLogin)


 

module.exports = router;