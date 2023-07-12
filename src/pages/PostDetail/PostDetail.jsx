import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'

export default function PostDetail({ posts }) {

  const { postId } = useParams();
  const post = posts.find((p) => p._id === postId);

  return (
    <>
        <NavBar />
        <div>
            <h1>Title: {post.title}</h1>
            <p>Text: {post.text}</p>
        </div>
    </>
  );
};



