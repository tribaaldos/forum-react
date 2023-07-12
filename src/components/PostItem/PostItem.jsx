import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <h1>Title: {post.title}</h1>
      <p>Text: {post.text}</p>

      <Link to={`/post/${post._id}`}>
        <button>Comment</button>
      </Link>
    </div>
  );
};

export default PostItem;
