import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostItem({ post }) {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the comment submission here
    // ...
  };

  return (
    <div>
      <h1>Title: {post.title}</h1>
      <p>Text: {post.text}</p>

      <form onSubmit={handleCommentSubmit}>
        <Link to={`/detailpage/${post.id}`}>
          <button type="submit">comment</button>
        </Link>
      </form>
    </div>
  );
}
