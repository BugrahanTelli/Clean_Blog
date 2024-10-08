const express = require("express")
const ejs = require("ejs")
const path = require("path")
const mongoose = require("mongoose")
const Blog = require("./modules/Blog")


const app = express()

//Connecting to the DB
mongoose.connect("mongodb://localhost:27017/cleanblog-test-db")

//Setting up the view engine(Template Engine)
app.set("view engine", "ejs")

//Middlewares
app.use(express.static("public"))

app.use(express.urlencoded({ extended : true }))

app.use(express.json())

//Routes
app.get("/", async (req, res) => {
    const posts = await Blog.find({})
    res.render("index",{
        posts
    })
});
app.get("/posts/:id", async (req, res) => {
    console.log(req.params.id)
    const post = await Blog.findById(req.params.id);
    res.render("post", {
        post
    });
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/add", (req, res) => {
    res.render("add")
})
app.post("/blogs", async (req,res)=>{
    await Blog.create(req.body)
    res.redirect("/")
})



const port = 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})