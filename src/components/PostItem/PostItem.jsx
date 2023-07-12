// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css'

export default function PostItem({ post }) {
  // const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the comment submission here
    // ...
  };

  return (
    <div className="post-item">
      <h1>{post.title}</h1>
      <p>Text: {post.text}</p>

      <form onSubmit={handleCommentSubmit}>
        <Link to={`/post/${post._id}`}>
          <button type="submit">comment</button>
        </Link>
      </form>
    </div>
  );
}
