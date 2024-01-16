const Post = ({ post }) => {
    return (
        <div className="item">
            <h2>{post?.title}</h2>
            <h2>{post?.text}</h2>
            <img height="100" src={post?.url} alt="" />
            <button>X</button>
        </div>
    );
};

export default Post;
