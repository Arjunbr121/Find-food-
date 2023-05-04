const express = require("express");
require("dotenv")
const {findOneUser} = require("../DB_Models/user_model.js")
const Router = express.Router();
const jwt = require('jsonwebtoken');

const responseObject = {status: "success", code : 200, errMsg:""}

Router.route("/")
        .post(async (req, res) =>{
            console.log("here")
            const {username, email, password} = req.body;
            let user = await findOneUser(username, email);
            user = JSON.parse(JSON.stringify(user[0]));
            console.log(user)
            if(user && (password == user.password)){
                const token = jwt.sign(user,process.env.APP_TOKEN, {expiresIn:"2h"})
                responseObject.token = token;
                return res.send(JSON.stringify(responseObject));
            }
            responseObject.code = 404;
            responseObject.status = 'failed';
            responseObject.errMsg = 'Username/Password not matched';
            return res.send(JSON.stringify(responseObject));
        })
        .put( (req, res) =>{

        })

module.exports = Router;

