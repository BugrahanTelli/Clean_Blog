const Blog = require("../modules/Blog")
const path = require("path")
exports.getAllPost = async (req, res) => {
    const posts = await Blog.find({}).sort("-dateCreated")
    res.render("index", {
        posts
    })
}

exports.getPost = async (req, res) => {
    const post = await Blog.findById(req.params.id);
    res.render("post", {
        post
    });
}

exports.createPost = async (req, res) => {
    await Blog.create(req.body)
    res.redirect("/")
}

exports.updatePost = async (req, res) => {
    const post = await Blog.findOne({ _id: req.params.id });
    post.title = req.body.title
    post.content = req.body.content
    post.save()
    res.redirect(`/posts/${req.params.id}`);
}

exports.deletePost = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect("/");
}