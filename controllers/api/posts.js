const Post = require ('../../models/post')

module.exports = {
    index,
    addPost,
    show,
};

async function index(req,res) {
    const posts = await Post.find({user: req.user._id})
    res.json(posts)
}

async function addPost(req, res) {
    req.body.user = req.user._id
    const post = await Post.create(req.body)
    res.json(post)
}

async function show(req, res) {
    const post = await Post.findOne({_id: req.params.id})
    res.json(post)
}
