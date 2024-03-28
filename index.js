require('dotenv').config()

const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require('ejs-mate');


app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate)
app.use(express.static(path.join(__dirname, "/public")));
app.use('/images', express.static(path.join(__dirname, 'public/images')));


app.listen(process.env.PORT , (req,res) => {
    console.log(`server is listening to the port ${process.env.PORT}`)
})

app.get("/home" , (req,res) => {
    res.render("home.ejs")
})

app.get("/aboutus" , (req,res) => {
    res.render("aboutUs.ejs");
})

app.get("/witnessUs" , (req,res) => {
    res.render("witness.ejs")
})

app.get("/radientleague" , (req,res) => {
    res.render("radientLeague.ejs")
})