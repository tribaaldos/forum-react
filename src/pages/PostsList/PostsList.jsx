import React, { useState, useEffect } from 'react';
import PostItem from '../../components/PostItem/PostItem';
import './PostsList.css';
import { ChakraProvider, Button } from '@chakra-ui/react'

export default function PostsList({ posts, user }) {
  const [sortedPosts, setSortedPosts] = useState([]);
  const [sortingMethod, setSortingMethod] = useState('');

  useEffect(() => {
    if (sortingMethod === 'new') {
      const sorted = [...posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setSortedPosts(sorted);
    } else if (sortingMethod === 'old') {
      const sorted = [...posts].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setSortedPosts(sorted);
    } else {
      const shuffled = [...posts].sort(() => Math.random() - 0.5);
      setSortedPosts(shuffled);
    }
  }, [posts, sortingMethod]);

    function handleSort() {
        setSortingMethod('new');
  };

    function handleOldSort() {
        setSortingMethod('old');
  };
//hey
    function handleRandomSort() {
        setSortingMethod('');
  };

  return (
    <ChakraProvider>
    <div className="allposts">
      <nav>
        <Button size='xs' variant={sortingMethod === 'new'} onClick={handleSort}>New Posts </Button>
        <Button size='xs' variant={sortingMethod === 'old'} onClick={handleOldSort}>Old Posts </Button>
        <Button size='xs' variant={}onClick={handleRandomSort}>Random </Button>
        {setSortingMethod}
      </nav>
        {sortedPosts.map((p, idx) => (
            <PostItem key={idx} user={user} post={p} comments={p.comments} />
            ))}    
    </div>
    </ChakraProvider>
  );
}
