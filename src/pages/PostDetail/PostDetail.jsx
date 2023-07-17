import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import * as commentAPI from '../../utilities/comment-api';
import * as postsAPI from '../../utilities/posts-api';
import { ChakraProvider, Textarea, Button, Input } from '@chakra-ui/react'
export default function PostDetail({ setPosts, posts, user, setUser, history }) {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [formComment, setComment] = useState({ comment: '' });
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(null);
  const [updatedPost, setUpdatedPost] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    async function getPost() {
      const post = await postsAPI.getDetail(postId);
      setPost(post);
      setLikeCount(post.likes.length)
      setUpdatedPost(post);
    }
    getPost();
  }, [postId]);

    async function handleUpdatePost() {
    await postsAPI.updatePost(postId, updatedPost);
    setPost(updatedPost);
    setEditMode(false);
  };

    function handleChange(evt) {
    const data = { ...formComment, [evt.target.name]: evt.target.value };
    setComment(data);
  };

    async function handleDelete() {
    await postsAPI.deletePost(postId);
    setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    history.push('/');
  };

    async function handleDeleteComment(commentId) {
    await commentAPI.deleteComment(commentId, postId);
    setPost((prevPost) => {
      const updatedComments = prevPost.comments.filter((comment) => comment._id !== commentId);
      return { ...prevPost, comments: updatedComments };
    });
  };

  async function handleLike() {
    const post1 = await postsAPI.toggleLikes(post._id)
    const updatedPosts = posts.map(p => p._id === post1._id ? post1 : p)
    setPosts(updatedPosts)
    setLikeCount(post1.likes.length)
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (editMode) return;
    
    const comment = await commentAPI.addComment(formComment, postId);
    setPost(comment);
    setComment({ comment: '' });
  }

  const likeButton = (
    <Button size='xs' colorScheme='gray' className='likebutton' onClick={handleLike}>
      {`${post && likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}`}
    </Button>
  );

  return (
    <>
      <NavBar user={user} setUser={setUser} />

      <div>
        <ChakraProvider>
        {editMode ? (
          <>
            <p>Title:</p>
            <Input size='sm'
              type="text"
              value={updatedPost.title}
              onChange={(evt) => setUpdatedPost({ ...updatedPost, title: evt.target.value })}
              />
            <p>Text:</p>
            <Textarea size='sm'
              value={updatedPost.text}
              onChange={(evt) => setUpdatedPost({ ...updatedPost, text: evt.target.value })}
              />
            <Button size='xs' colorScheme='gray' onClick={handleUpdatePost}>Update</Button>
            <Button size='xs' colorScheme='gray' onClick={() => setEditMode(false)}>Cancel</Button>
          </>
        ) : (
          <>
            <h1>
              <strong>{post && post.title}</strong>
            </h1>
            <p> {post && post.text}</p>
            {likeButton}
            <Button size='xs' colorScheme='gray'onClick={handleDelete}>Delete</Button>
            <Button size='xs' colorScheme='gray' onClick={() => setEditMode(true)}>Edit</Button>
          </>
        )}

        <form onSubmit={handleSubmit}>
          <Input size='sm'
            required
            type="text"
            name="comment"
            value={formComment.comment || ''}
            onChange={handleChange}
            placeholder="Write a comment"
            />
          <Button size ='xs' colorScheme='gray' type="submit">Submit Comment</Button>
        </form>

        <h2>
          <strong>Comments:</strong>
        </h2>ƒ
        {post &&
          post.comments.map((comment) => (
            <div key={comment._id} user={user}>
              <p>{comment.user.name}</p>
              <p>{comment.comment}</p>
              {likeButton}
              <Button size='xs' onClick={() => handleDeleteComment(comment._id)}>Delete Comment</Button>
            </div>
          ))}
          </ChakraProvider>
      </div>
    </>
  );
}
