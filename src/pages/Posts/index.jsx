import Post from './Post.jsx';
import './Posts.scss';
// import { posts } from '../../utils.js';
import { useState } from 'react';

const Posts = () => {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState([]);

    const onChange = event => {
        setText(event.target.value);
    };

    const clear = () => {
        setText('');
    };

    const addPost = () => {
        setPosts([...posts, { title: text }]);
        clear();
    };

    return (
        <div>
            <input value={text} type="text" placeholder="Введите ваше значение" onChange={onChange} />
            <button onClick={addPost}>Добавить пост</button>
            <button onClick={clear}>Очистить</button>
            <h2>{text}</h2>

            {posts.map(post => {
                return <Post post={post} />;
            })}
        </div>
    );
};

export default Posts;
