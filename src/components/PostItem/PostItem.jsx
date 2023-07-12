import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  const [showPostDetail, setShowPostDetail] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setShowPostDetail(true);
  };

  return (
    <div className="post-item">
      <h1>Title: {post.title}</h1>
      <p>Text: {post.text}</p>

      <form onSubmit={handleCommentSubmit}>
        <button type="submit">Comment</button>
      </form>

      {showPostDetail && (
        <div>
          <h2>Post Detail</h2>
          <p>Title: {post.title}</p>
          <p>Text: {post.text}</p>
        </div>
      )}
    </div>
  );
};

export default PostItem;

        // <Link to={`/post/${post._id}`}></Link>