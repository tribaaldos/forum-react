import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import * as postsAPI from '../../utilities/posts-api';
import AuthPage from '../AuthPage/AuthPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import HomePage from '../../pages/HomePage/HomePage';
import PostDetail from '../../pages/PostDetail/PostDetail'
import PostItem from '../../components/PostItem/PostItem'
import NavBar from '../../components/NavBar/NavBar'
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
              <Route path="/" element={<HomePage 
                user={user} setUser= {setUser} setPosts={setPosts} posts={posts} />} /> 
              <Route path="/profile" element={<ProfilePage
               user={user} setUser={setUser}/>} />
              <Route path="/post/:postId" element={<PostDetail
                component={PostItem} posts={posts} setPosts={setPosts}user={user} setUser={setUser} />} />
            </Routes>
                
          </>
        ) : (
          <>
 
          <AuthPage setUser={setUser} />
          
          </>
        )}
      </main>
    </ChakraProvider>
  );
}
