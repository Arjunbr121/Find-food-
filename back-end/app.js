const express = require('express')
const app = express()


app.listen(2500, (req, res) =>{
    console.log("Backend node server is running!");
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