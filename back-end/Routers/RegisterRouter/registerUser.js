const express = require('express')
const Router = express.Router();
const jwt = require('jsonwebtoken')

Router.route("/")
    .post((req, res) =>{
        const {username, password} = req.body;
        let token = jwt.sign({user:{username, password}}, process.env.APP_TOKEN);
        res.send(token);
    })

module.exports = Router;
