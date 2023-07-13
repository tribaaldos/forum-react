import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import * as postsAPI from '../../utilities/posts-api';

export default function PostDetail({ setPosts, posts }) {
  const { postId } = useParams();
  const post = posts.find((p) => p._id === postId);

  const [formComment, setComment] = useState('');

  const handleChange = (evt) => {
    const data = {...formComment, [evt.target.name]: evt.target.value}
    setComment(data);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const comment = await postsAPI.addComment(formComment);
    post.comments.push(comment);
    setPosts([...posts]);
    setComment('');
  }

  return (
    <>
      <NavBar />

      <div>
        <h1>Title: {post.title}</h1>
        <p>Text: {post.text}</p>

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
        {/* {post.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))} */}
      </div>
    </>
  );
}
