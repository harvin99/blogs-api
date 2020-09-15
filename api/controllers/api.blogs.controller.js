const Blog = require("../../models/Blog.model")
module.exports.getBlogs = (req, res) => {
    try {
        res.status(200).json(res.paginatedResults)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({error : "Not found !"})
    }
}
module.exports.getBlogById = async (req, res) => {
    try {
        const blog =  await Blog.findById(req.params.id)
        if(!blog){
            res.status(500).json({error : "Blog is not found !"})
            return
        }
        res.status(200).json({blog : blog})
    } catch (error) {
        console.log(error.message)
        res.status(404).json({error : "Not found !"})
    }
}