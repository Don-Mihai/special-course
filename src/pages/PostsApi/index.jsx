import axios from 'axios';
import Post from './Post.jsx';
import './Posts.scss';
// import { posts } from '../../utils.js';
import { useState } from 'react';

const inititalState = { text: '', title: '' };

const Posts = () => {
    const [formValues, setFormValues] = useState(inititalState);

    const [posts, setPosts] = useState([]);

    const onChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        setFormValues({ ...formValues, [key]: value });
    };

    const clear = () => {
        setFormValues(inititalState);
    };

    const addPost = () => {
        axios.post('https://65a6cd1f74cf4207b4f0d629.mockapi.io/posts', formValues);
        clear();
    };

    const deletePost = id => {
        const newPosts = posts.filter(item => item.id !== id);
        setPosts(newPosts);
    };

    return (
        <div>
            <input value={formValues.text} name="text" type="text" onChange={onChange} />
            <input value={formValues.title} name="title" type="text" onChange={onChange} />
            <button onClick={addPost}>Добавить пост</button>
            <button onClick={clear}>Очистить</button>
            <h2>{formValues.text}</h2>
            <h2>{formValues.title}</h2>

            {posts.map(post => {
                return <Post post={post} onDelete={deletePost} />;
            })}
        </div>
    );
};

export default Posts;
