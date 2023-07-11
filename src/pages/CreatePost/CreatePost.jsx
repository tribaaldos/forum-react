import {Text, Textarea } from '@chakra-ui/react'
import './CreatePost.css'
import { useEffect, useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';
import PostsList from '../../pages/PostsList/PostsList';

export default function CreatePost() {

  const [posts, setPosts] = useState([])

  const [formData, setFormData] = useState({title: '', text: ''})

  useEffect(() => {
    async function getAllPosts() {
      const posts = await postsAPI.getPosts()
      setPosts(posts)
    }
    getAllPosts()
  },[])
  
  function handleChange(evt) {
    const data = {...formData, [evt.target.name]:evt.target.value}
    setFormData (data)

  }
  async function handleSubmit(evt) {
    evt.preventDefault()
    const post = await postsAPI.addPost(formData)
    setPosts([...posts, post])
    setFormData({title: '', text: ''})
  }

  return(
    <>
    <div className="createpost-container">
    <body>
      
    <h3>&nbsp; Create a Post</h3>
    <form onSubmit={handleSubmit}>    
      <input className='title' placeholder='Write a title'name="title" value={formData.title || '' } onChange={handleChange} />
      <Textarea className='post' placeholder='Text here' name="text" value={formData.text || ''} onChange={handleChange} />
      <button type="submit">POddST</button>
    </form>
    {posts.length === 0 ? "No Posts Yet" : <PostsList posts={posts} />}

    </body>
    

    </div>
    </>
  )
}