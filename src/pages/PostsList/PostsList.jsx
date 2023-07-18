import React, { useState, useEffect } from 'react';
import PostItem from '../../components/PostItem/PostItem';
import './PostsList.css';
import { ChakraProvider, Button, extendTheme } from '@chakra-ui/react'

export default function PostsList({ setPosts, posts, user }) {
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
    } else if (sortingMethod === 'trend') {
      const sorted = [...posts].sort(
        (a, b) => (b.likes.length - a.likes.length)
      )
      setSortedPosts(sorted);

    } else {
      const sorted = [...posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setSortedPosts(sorted);
    }

  }, [posts, sortingMethod]);

    function handleSort() {
        setSortingMethod('new');
  };

    function handleOldSort() {
        setSortingMethod('old');
  };
    function handleTrendSort() {
      setSortingMethod('trend');
    }


  const customTheme = extendTheme({
    components: {
      Button: {
        variants: {
          active: {
            bg: 'blue.500',
            color: 'white',
          },
          inactive: {
            bg: 'gray.200',
            color: 'gray.800',
          },
        },
      },
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
    <div className="allposts">
      <nav>
        <Button size='xs' variant={sortingMethod === 'new' ? 'active' : 'inactive'} onClick={handleSort}>New Posts </Button>
        <Button size='xs' variant={sortingMethod === 'old' ? 'active' : 'inactive'} onClick={handleOldSort}>Old Posts </Button>
        <Button size='xs' variant={sortingMethod === 'trend' ? 'active' : 'inactive'} onClick={handleTrendSort}>Fire Posts</Button>
        {setSortingMethod}
      </nav>
        {sortedPosts.map((p, idx) => (
            <PostItem key={p._id} user={user} posts = {posts} setPosts={setPosts} post={p} comments={p.comments} />
            ))}    
    </div>
    </ChakraProvider>
  );
}
