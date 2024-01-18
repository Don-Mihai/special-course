const Post = ({ post, onDelete }) => {
    return (
        <div className="item">
            <h2>{post?.title}</h2>
            <h2>{post?.text}</h2>
            <img height="100" src={post?.url} alt="" />
            <button onClick={() => onDelete(post?.id)}>X</button>
        </div>
    );
};

export default Post;
