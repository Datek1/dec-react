import React from 'react';

const FullComment = ({comments}) => {
    return (
        <div>
            <h4>userId-{comments.userId} title - {comments.title}</h4>
            <p>body - {comments.body}</p>
        </div>
    );
};

export default FullComment;