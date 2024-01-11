const Post = ({ post }) => {
    return (
        <div className="item">
            <h2>{post?.title}</h2>
            <img height="100" src={post?.url} alt="" />
            <button>Кнопка</button>
        </div>
    );
};

export default Post;
