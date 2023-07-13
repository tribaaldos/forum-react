const Post = require ('../../models/post')

module.exports = {
    addComment
};

async function addComment(req, res) {
    req.body.user = req.user._id
    const { id } = req.params;

    const post = await Post.findOne({_id:id})
    // const post = await Post.findOne({_id:req.params.id})
    post.comments.push(req.body)
    await post.save()
    res.json(post)
 }