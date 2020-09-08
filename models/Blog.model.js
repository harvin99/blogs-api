const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String, 
    description: String,
    avatar: String,
    createAt: String,
    content: String,
    author: String
})
const Blog = mongoose.model('Blog', blogSchema, 'blogs')

module.exports = Blog