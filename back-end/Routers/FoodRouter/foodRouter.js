const express = require('express')
const Router = express.Router();
const auth = require("../../Middleware/auth_middleware.js")

const { findAllFood,
        addNewFood,
        updateFood,
        deleteFood } = require('../../DB_Models/food_model.js')

Router.route("/")
    .get(findAllFood)

Router.route("/new")
    .post(addNewFood)

Router.route("/:id")
    .put(updateFood)
    .delete(deleteFood);

module.exports = Router;