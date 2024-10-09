const Blog = require("../modules/Blog")

exports.getAboutPage = (req, res) => {
    res.render("about")
}

exports.getAddPage = (req, res) => {
    res.render("add")
}

exports.getUpdatePage = async (req, res) => {
    const post = await Blog.findById(req.params.id);
    res.render("update", { post });
}