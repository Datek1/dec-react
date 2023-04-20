import React from 'react';
import {Link} from "react-router-dom";


const Comment = ({comments}) => {
    return (
        <div>
            <p>{comments.id}</p>
            <Link to={comments.postId.toString()} state={{...comments}}>{comments.body}</Link>
        </div>
    );
};

export default Comment;