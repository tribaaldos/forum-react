const Post = require ('../../models/post')

module.exports = {
    addComment,
    deleteComment,
    toggleLikeComment
};

async function addComment(req, res) {
    req.body.user = req.user._id
    const { id } = req.params;
    const post = await Post.findOne({_id:id})
    post.comments.push(req.body)
    await post.save()
    res.json(post)
 }

 async function deleteComment(req, res) {

    const { id, commentId } = req.params;
    const post = await Post.findOne({ _id: id });
    const commentIndex = post.comments.findIndex((comment) => comment._id.toString() === commentId);
    post.comments.splice(commentIndex, 1);
    await post.save();
    res.json(post);

  }

  async function toggleLikeComment(req, res) {
    const { id, commentId } = req.params;
    const post = await Post.findOne({ _id: id });
    const comment = post.comments.find((comment) => comment._id.toString() === commentId);
    if (comment.likes.includes(req.user._id)) {
      console.log('removing like');
      comment.likes.remove(req.user._id);
    } else {
      console.log('adding like');
      comment.likes.push(req.user._id);
    }
    console.log(comment)
    await post.save();
    res.json(post);
  }