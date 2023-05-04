const express = require('express')
const Router = express.Router();
const auth = require("../../Middleware/auth_middleware.js")

const foods = [
    {"name" : "idly", "description": "Idly with cup of sambar and chatney", "price" : 20, "id" : 203, "restaurant" : "Something"},
    {"name" : "Vada", "description": "vada with cup of sambar and chatney", "price" : 30, "id" : 204, "restaurant" : "Something"}
]

Router.route("/")
        .get(auth,(req, res) =>{
            res.send(JSON.stringify({"data" : foods}));
        })

module.exports = Router;