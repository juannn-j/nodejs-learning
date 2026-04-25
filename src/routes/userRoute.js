const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController.js");

route.get("/", userController.getAllUsers);

module.exports = route;
