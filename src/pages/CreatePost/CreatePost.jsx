import {Textarea } from '@chakra-ui/react'
import './CreatePost.css'
import { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';

export default function CreatePost({setPosts, posts, setShowCreatePost}) {


  const [formData, setFormData] = useState({title: '', text: ''})

 
  
  function handleChange(evt) {
    const data = {...formData, [evt.target.name]:evt.target.value}
    setFormData (data)

  }
  async function handleSubmit(evt) {
    evt.preventDefault()
    const post = await postsAPI.addPost(formData)
    setPosts([...posts, post])
    setFormData({title: '', text: ''})
    setShowCreatePost(false)
  }

  return(
    <>
    <div className="createpost-container">

    <h3>&nbsp; Create a Post</h3>
    <form onSubmit={handleSubmit}>    
      <input required className='title' placeholder='Write a title'name="title"
      value={formData.title || '' } onChange={handleChange} />
      <Textarea required className='post' placeholder='Text here' name="text" 
      value={formData.text || ''} onChange={handleChange} />
      <button type="submit">POST</button>
    </form>

   

    </div>
    </>
  )
}