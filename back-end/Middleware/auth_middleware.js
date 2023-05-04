const jwt = require("jsonwebtoken");

const isAuthenicated = (req, res, next) => {
    const token = req.body.token;

    if(!token){
        return res.status(403).send("Token is not there in the request");
    }

    try{
        const decoded = jwt.verify(token, process.env.APP_TOKEN);
        req.user = decoded;
    }catch(e){
        console.log(e.message)
        if(e.message == 'jwt expired'){
            req.body.token = jwt.sign({}, process.env.APP_TOKEN)
        }
        else{
            return res.status(401).send("Invalid token");
        }
    }

    return next();
}

module.exports = isAuthenicated;

