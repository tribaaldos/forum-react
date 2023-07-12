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
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import HomePage from '../../pages/HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);


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
            <Routes>
              <Route path="/" element={<HomePage user={user} setUser={setUser} setPosts={setPosts} posts={posts} />} /> 
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
                
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </ChakraProvider>
  );
}
