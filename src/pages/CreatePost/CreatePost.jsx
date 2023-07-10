import {Text, Textarea } from '@chakra-ui/react'
import './CreatePost.css'
import { useEffect, useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';
import PostsList from '../../pages/PostsList/PostsList';

export default function CreatePost() {

  const [posts, setPosts] = useState([])

  const [formData, setFormData] = useState('')

  useEffect(() => {
    async function getAllPosts() {
      const posts = await postsAPI.getPosts()
      setPosts(posts)
    }
    getAllPosts()
  },[])
  
  
  async function handleSubmit() {
    const post = await postsAPI.addPost(formData)
    console.log(post)
  }

  return(
    <>
    <div className="createpost-container">
    <body>
      
    <h3>&nbsp; Create a Post</h3>
    <form onSubmit={handleSubmit}>    
      <input className='title' placeholder='Write a title'name="text" value={formData} onChange={(evt) =>
        setFormData(evt.target.value)} />
      <Textarea className='post' placeholder='Text here' />
      <button type="submit" className="button-post">POST</button>
    </form>
    {posts.length === 0 ? "No Posts Yet" : <PostsList posts={posts} />}

    </body>
    

    </div>
    </>
  )
}