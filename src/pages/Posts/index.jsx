import Post from './Post.jsx';
import './Posts.scss';
// import { posts } from '../../utils.js';
import { useState } from 'react';

const Posts = () => {
	const [formValues, setFormValues] = useState({ text: '', title: '' });

    const [posts, setPosts] = useState([]);

    const onChangeText = event => {
        setFormValues({ text: event.target.value });
    };

    const onChangeTitle = event => {
        setFormValues({ title: event.target.value });
    };

    const clear = () => {
        setFormValues({});
    };

    const addPost = () => {
        setPosts([...posts, { title: formValues.title, text: formValues.text }]);
        clear();
    };

    return (
        <div>
            <input value={formValues.text} type="text" onChange={onChangeText} />
            <input value={formValues.title} type="text" onChange={onChangeTitle} />
            <button onClick={addPost}>Добавить пост</button>
            <button onClick={clear}>Очистить</button>
            <h2>{formValues.text}</h2>
            <h2>{formValues.title}</h2>

            {posts.map(post => {
                return <Post post={post} />;
            })}
        </div>
    );
};

export default Posts;
