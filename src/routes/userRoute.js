const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController.js");

route.get("/", userController.getAllUsers);
route.get("/:id", userController.getUser);
route.post("/", userController.createUser);
route.put("/:id", userController.updateUser);
route.delete("/:id", userController.deleteUser);

module.exports = route;
