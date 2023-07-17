import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'react-feather';
import * as postsAPI from '../../utilities/posts-api';
import {ChakraProvider, Button} from '@chakra-ui/react'
const PostItem = ({ post, user, setPosts, posts }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post && post.likes.length || 0);
  
  async function handleLike() {
    const post1 = await postsAPI.toggleLikes(post._id)
    const updatedPosts = posts.map(p => p._id === post1._id ? post1 : p)
    setPosts(updatedPosts)
    setLikeCount(post1.likes.length)
  }

  const likeButton = (
    <Button size='xs' className="likebutton" onClick={handleLike}>
      {`${likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}`}
    </Button>
  );
  const getTimeDifference = () => {
    const currentTime = new Date().getTime();
    const postTime = new Date(post.createdAt).getTime();
    const timeDifference = currentTime - postTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
    if (days > 0) {
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else {
      return 'Less than an hour ago';
    }
  };
  console.log(post && post)
  return (
    <div className="post-item">
      <ChakraProvider>
      <Link to={`/post/${post._id}`}>
        {`posted by /${post.user.name}  ${getTimeDifference()}`}
        <h2><b>{post.title}</b></h2>
        <p>{post.text}</p>
        <Button size='xs'><MessageSquare /></Button>
      </Link>
        {likeButton}
    </ChakraProvider>
    </div>
  );
};

export default PostItem;
