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
        setPosts([...posts, { title: formValues.title, text: formValues.text }]);
        clear();
    };

    console.log(formValues);
    return (
        <div>
            <input value={formValues.text} name="text" type="text" onChange={onChange} />
            <input value={formValues.title} name="title" type="text" onChange={onChange} />
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
