const express = require('express')

const apiBlogsController = require("../controllers/api.blogs.controller")

const router = express.Router()

router.get('/', apiBlogsController.getBlogs)
router.get('/:id', apiBlogsController.getBlogById)

module.exports = router