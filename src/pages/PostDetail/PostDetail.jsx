
import React from 'react';
import PostItem from '../../components/PostItem/PostItem';

export default function PostsList({ posts, clickedPostId }) {
  // Find the clicked post from the posts array
  const clickedPost = posts.find((post) => post._id === clickedPostId);

  return (
    <div>
      {clickedPost && <PostItem post={clickedPost} />}
    </div>
  );
}
