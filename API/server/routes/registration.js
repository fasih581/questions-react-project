const express = require('express');
const route = express.Router();

const regController = require("../controller/registration.controller");

// // Blog API
route.post("/register",  regController.RegUserPost );

module.exports = route;