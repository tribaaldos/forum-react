const Post = require ('../../models/post')

module.exports = {
    addComment,
    deleteComment,
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

 async function deleteComment(req, res) {
    const { id, commentId } = req.params;
  
    try {
      const post = await Post.findOne({ _id: id });
  
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      const commentIndex = post.comments.findIndex((comment) => comment._id.toString() === commentId);
  
      if (commentIndex === -1) {
        return res.status(404).json({ error: 'Comment not found' });
      }
  
      post.comments.splice(commentIndex, 1);
      await post.save();
  
      res.json(post);
    } catch (error) {
      console.error('Error deleting comment:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }