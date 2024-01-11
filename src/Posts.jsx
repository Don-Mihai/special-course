import './Posts.scss';

const Posts = () => {
    return (
        <div>
            {posts.map(item => {
                return (
                    <div className="item">
                        <h2>{item.title}</h2>
                        <img height="100" src={item.url} alt="" />
                        <button>Кнопка</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;
