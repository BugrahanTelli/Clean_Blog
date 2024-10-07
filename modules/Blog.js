const mongoose = require("mongoose")


//Schematic
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    dateCreated : {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model("Blog",blogSchema)

module.exports = Blog