const express = require('express')
const app = express()
require('dotenv').config()

const loginRouter = require('./Routers/loginRouter.js');
const foodRouter = require('./Routers/FoodRouter/foodRouter.js');
const registerRouter = require("./Routers/RegisterRouter/registerUser.js")
console.log(process.env.PORT)
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/login", loginRouter);
app.use("/foods", foodRouter);
app.use("/register", registerRouter);


app.listen(PORT, async (req, res) =>{
    console.log(`Backend node server is running at PORT ${PORT}!`);
})

app.get("/developers", (req, res) =>{
    let obj = {
        "developers-names" : ["Hrithik","Arjun"],
        "project-start date" : "01-01-2023",
        "app-name" : "Find-food",
        "repo" : "https://github.com/Arjunbr121/Find-food-.git"
    }
    res.send(JSON.stringify(obj))
});