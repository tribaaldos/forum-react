import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import PostsList from '../../pages/PostsList/PostsList';
import AuthPage from '../AuthPage/AuthPage';
import CreatePost from '../../pages/CreatePost/CreatePost';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleClick = () => {
    setShowCreatePost(true);
  };

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
                    {showCreatePost && <Navigate to="/post" replace={true} />}
                  </>
                }
              />
              <Route path="/" element={<PostsList />} />
              <Route path="/post" element={<CreatePost />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </ChakraProvider>
  );
}
