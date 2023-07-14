import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'react-feather';
import * as postsAPI from '../../utilities/posts-api';

const PostItem = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = async () => {
    if (!liked) {
      try {
        setLiked(true);
        setLikeCount(likeCount + 1);
        // await postsAPI.likePost(post._id); // Actualizar la función para indicar la lógica de like en la API
      } catch (error) {
        console.log('Error liking the post:', error);
      }
    }
  };

  const likeButton = (
    <button className="likebutton" onClick={handleLike}>
      {`${likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}`}
    </button>
  );

  return (
    <div className="post-item">
      <Link to={`/post/${post._id}`}>
        <h2><b>{post.title}</b></h2>
        <p>{post.text}</p>
        <button><MessageSquare /></button>
      </Link>
        {likeButton}
    </div>
  );
};

export default PostItem;
