


export default function PostsList({ posts }) {
    const allPosts = posts.map((n, idx) => (
    <p key={idx}>{n.text}</p>))
    return (
        <div>{allPosts}</div>
);
}