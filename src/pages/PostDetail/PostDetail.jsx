import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import * as commentAPI from '../../utilities/comment-api';
import * as postsAPI from '../../utilities/posts-api';

export default function PostDetail({ setPosts, posts, user, setUser }) {
  const { postId } = useParams();
  // const post = posts.find((p) => p._id === postId);
  const [post, setPost] = useState(null) 
  const [formComment, setComment] = useState({comment: ''});

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    async function getPost() {
      const post = await postsAPI.getDetail(postId)
      setPost(post)
    }
    getPost();
  }, [postId])
  const handleChange = (evt) => {
    const data = {...formComment, [evt.target.name]: evt.target.value}
    setComment(data);
  }

  const handleDelete = async () => {
    await postsAPI.deletePost(postId)
  }
  const handleDeleteComment = async () => {
    await commentAPI.deleteComment(postId)
  }
  const handleLike = async () => {
    if (!liked) {
      try {
       
        setLiked(true);
        setLikeCount(likeCount + 1);
      } catch (error) {
        console.log('Error liking the post:', error);
      }
    }
  };
  async function handleSubmit(evt) {
    evt.preventDefault();
    const comment = await commentAPI.addComment(formComment, postId);
    setPost(comment)
    setComment({comment: ''});
  }
  const likeButton = (<button className='likebutton' onClick={handleLike} >
  {`${likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}`}
  </button>);
  return (
    <>
      <NavBar user={user} setUser={setUser}/>

      <div>
        <h1><strong>{post && post.title}</strong> </h1>
        <p>Text: {post && post.text}</p>

        {likeButton}
        <button onClick={handleDelete} navigate to="/">Delete</button>


        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="comment"
            value={formComment.comment || ''}
            onChange={handleChange}
            placeholder="Write a comment"
          />
          <button type="submit">Submit Comment</button>
        </form>

        <h2><strong>Comments:</strong></h2>
        {post && post.comments.map((comment, index) => (
          <>
          <p key={index}>{comment.comment } {likeButton} </p>
          <button onClick={handleDeleteComment} >Delete Comment</button>
          </>
        ))}
      </div>
    </>
  );
}
