import CreatePost from '../CreatePost/CreatePost'
import PostsList from '../PostsList/PostsList'
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { ChakraProvider, Input } from '@chakra-ui/react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export default function HomePage({user, setUser, setPosts, posts}) {
    const [showCreatePost, setShowCreatePost] = useState(false);
    
    return (

        <>
        <ChakraProvider>
            <NavBar setShowCreatePost={setShowCreatePost} user={user} setUser={setUser} />
           
            {!showCreatePost && <Input leftIcon={AccountCircleRoundedIcon} type="text"
                      onClick={() => setShowCreatePost(true)}
                      placeholder="Create a post!"
                      /> }
            {showCreatePost && <CreatePost setPosts={setPosts} posts={posts} setShowCreatePost={setShowCreatePost} /> }
    
            
           

            {!showCreatePost && <PostsList user={user} posts={posts} /> }
        </ChakraProvider>
            
        </>
    )
}