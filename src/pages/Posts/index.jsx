import Post from './Post.jsx';
import './Posts.scss';
// import { posts } from '../../utils.js';
import { useState } from 'react';

const Posts = () => {
    const [text, setText] = useState('');
	const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    const onChangeText = event => {
        setText(event.target.value);
    };

    const onChangeTitle = event => {
        setTitle(event.target.value);
    };

    const clear = () => {
        setText('');
        setTitle('');
    };

    const addPost = () => {
        setPosts([...posts, { title, text }]);
        clear();
    };

    return (
        <div>
            <input value={text} type="text" onChange={onChangeText} />
            <input value={title} type="text" onChange={onChangeTitle} />
            <button onClick={addPost}>Добавить пост</button>
            <button onClick={clear}>Очистить</button>
            <h2>{text}</h2>
            <h2>{title}</h2>

            {posts.map(post => {
                return <Post post={post} />;
            })}
        </div>
    );
};

export default Posts;
