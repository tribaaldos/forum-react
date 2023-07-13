import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

export default function PostDetail({ setPosts, posts }) {
  const { postId } = useParams();
  const post = posts.find((p) => p._id === postId);

  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the comment submission here
    // You can save the comment to the database or update the post's comments array

    // Example logic to update the post's comments array
    const updatedPosts = posts.map((p) =>
      p._id === postId ? { ...p, comments: [...p.comments, comment] } : p
    );
    setPosts(updatedPosts);

    // Clear the comment input field
    setComment('');
  };

  return (
    <>
      <NavBar />
      <div>
        <h1>Title: {post.title}</h1>
        <p>Text: {post.text}</p>

        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment"
          />
          <button type="submit">Submit Comment</button>
        </form>

        <h2>Comments as </h2>
        {post.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </>
  );
}
