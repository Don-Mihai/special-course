import { useState } from 'react';

const Post = ({ post, onDelete, onEdit }) => {
    const [isEdit, setIsEdit] = useState(false);

    const onEditClick = () => {
        onEdit(post?.id);
        setIsEdit(!isEdit);
    };

    return (
        <div className="item">
            <h2>{isEdit ? <input value={post?.title} type="text" /> : post?.title}</h2>
            <h2>{isEdit ? <input value={post?.text} type="text" /> : post?.text}</h2>

            <img height="100" src={post?.url} alt="" />
            <button onClick={() => onDelete(post?.id)}>X</button>
            <button onClick={onEditClick}>Редактировать</button>
        </div>
    );
};

export default Post;
