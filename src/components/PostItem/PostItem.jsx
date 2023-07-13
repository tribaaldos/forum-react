import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare} from 'react-feather';

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <Link to={`/post/${post._id}`}>
        <h2><b>{post.title}</b></h2>
        <p>Text: {post.text}</p>
        <button><MessageSquare /></button>
      </Link>
    </div>
  );
};

export default PostItem;
