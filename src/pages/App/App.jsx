import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import * as postsAPI from '../../utilities/posts-api';
import PostsList from '../../pages/PostsList/PostsList';
import AuthPage from '../AuthPage/AuthPage';
import CreatePost from '../../pages/CreatePost/CreatePost';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleClick = () => {
    setShowCreatePost(true);
  };

  useEffect(() => {
    async function fetchPosts() {
      const posts = await postsAPI.getPosts();
      setPosts(posts);
    }
    fetchPosts();
  }, []);



  return (
    <ChakraProvider>
      <main className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {!showCreatePost && (
                      <input
                      type="text"
                      onClick={handleClick}
                      placeholder="Create a post!"
                      />
                      )}
                    {showCreatePost && <Navigate to="/submit" replace={true} />}
                  </>
                }
                />
              <Route path="/" element={<PostsList />} />
              <Route path="/submit" element={<CreatePost />} />
            </Routes>
                {posts.length === 0 ? "No Posts Yet" : <PostsList posts={posts} />}
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </ChakraProvider>
  );
}
