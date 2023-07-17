const Post = require ('../../models/post')

module.exports = {
    index,
    addPost,
    show,
    deletePost,
    updatePost
};

async function index(req, res) {
    const posts = await Post.find({})
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

async function deletePost(req, res) {
    const postId = req.params.id;
    const userId = req.user._id;
    const post = await Post.findOneAndDelete({_id: postId, user: userId  });
    res.json(post)
  }
  
  async function updatePost(req, res) {
    const postId = req.params.id;
    const userId = req.user._id;
    const updatedPost = req.body;
  
    const post = await Post.findOneAndUpdate(
      { _id: postId, user: userId },
      updatedPost,
      { new: true }
    );
    res.json(post);
  }
