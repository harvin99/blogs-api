const express = require('express')

const Blog = require("../../models/Blog.model")

const apiBlogsController = require("../controllers/api.blogs.controller")

const router = express.Router()

const apiBlogsMiddleware = require("../middlewares/api.blogs.middleware")

router.get('/', apiBlogsMiddleware(Blog), apiBlogsController.getBlogs)
router.get('/:id', apiBlogsController.getBlogById)

module.exports = router