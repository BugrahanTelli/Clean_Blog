const express = require("express")
const ejs = require("ejs")
const path = require("path")
const mongoose = require("mongoose")
const Blog = require("./modules/Blog")
const methodOverride = require('method-override')
const postControllers = require("./controllers/postControllers.js")
const pageControllers = require("./controllers/pageControllers.js")

const app = express()

//Connecting to the DB
mongoose.connect("mongodb://localhost:27017/cleanblog-test-db")
//Setting up the view engine(Template Engine)
app.set("view engine", "ejs")
//Middlewares
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method',{methods:["POST","GET"]}));
//Routes
app.get("/", postControllers.getAllPost)
app.get("/posts/:id", postControllers.getPost)
app.post("/blogs", postControllers.createPost)
app.put("/post/:id", postControllers.updatePost);
app.delete("/post/:id", postControllers.deletePost);

app.get("/about",pageControllers.getAboutPage)
app.get("/add", pageControllers.getAddPage)
app.get("/post/update/:id",pageControllers.getUpdatePage);

const port = 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})