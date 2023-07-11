import { useState } from 'react';

export  default function PostItem({post}) {

    const [comment, setComment] = useState('');
    
    const handleCommentSubmit = (e) => {
        console.log('comment working')
    }
    return (
        <div>
            <h1>Title: {post.title}</h1>
            <p>Text: {post.text}</p>

            <form onSubmit={handleCommentSubmit}>
                <button type="submit">comment</button>
            </form>
        </div>
    )
}