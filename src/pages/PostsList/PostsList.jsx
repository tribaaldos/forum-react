import PostItem from '../../components/PostItem/PostItem'


export default function PostsList({ posts }) {
    const allPosts = posts.map((p, idx) => (<PostItem key={idx} post={p}/>))
    return (
        <div>{allPosts}</div>
);
}