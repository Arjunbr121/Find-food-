const express = require("express");
const app = express()
const port = 2000

app.listen(2000, (req, res) =>{
    console.log(`Running server at PORT ${port}`)
})

app.set("views", "views")
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) =>{
    res.redirect("/home")
})
app.get("/home", (req, res) =>{
    res.render('indexpage/home_page.ejs');
})

app.get("/index", (req, res) =>{
    console.log("got request")
    res.render('login/index.ejs');
})
app.get("/food", (req, res) =>{
    console.log("got request")
    res.render('page_1/page_1.ejs');
})

app.get("/contentPage", (req, res) => {
    res.render("contentPage/index.ejs")
})
