import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import * as commentAPI from '../../utilities/comment-api';
import * as postsAPI from '../../utilities/posts-api';

export default function PostDetail({ setPosts, posts }) {
  const { postId } = useParams();
  // const post = posts.find((p) => p._id === postId);
  const [post, setPost] = useState(null) 
  const [formComment, setComment] = useState({comment: ''});

  useEffect(() => {
    async function getPost() {
      const post = await postsAPI.getDetail(postId)
      setPost(post)
    }
    getPost();
  }, [])
  const handleChange = (evt) => {
    const data = {...formComment, [evt.target.name]: evt.target.value}
    setComment(data);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const comment = await commentAPI.addComment(formComment, postId);
    setPost(comment)
    setComment({comment: ''});
  }

  return (
    <>
      <NavBar />

      <div>
        <h1>Title: {post && post.title}</h1>
        <p>Text: {post && post.text}</p>

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

        <h2>Comments:</h2>
        {post && post.comments.map((comment, index) => (
          <p key={index}>{comment.comment}</p>
        ))}
      </div>
    </>
  );
}
