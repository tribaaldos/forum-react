import CreatePost from '../CreatePost/CreatePost'
import PostsList from '../PostsList/PostsList'
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export default function HomePage({user, setUser, setPosts, posts}) {
    const [showCreatePost, setShowCreatePost] = useState(false);
    
    // const handleClick = () => {
    //   setShowCreatePost(true);
    // };
    
    return (

        <>
            <NavBar setShowCreatePost={setShowCreatePost} user={user} setUser={setUser} />
            <AccountCircleRoundedIcon />
            {!showCreatePost && <input type="text"
                      onClick={() => setShowCreatePost(true)}
                      placeholder="Create a post!"
                      /> }
            {showCreatePost && <CreatePost setPosts={setPosts} posts={posts} setShowCreatePost={setShowCreatePost} /> }
    
            
           

            {!showCreatePost && <PostsList posts={posts} /> }
            
        </>
    )
}