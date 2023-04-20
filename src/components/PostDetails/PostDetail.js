import React from 'react';

const PostDetail = ({post}) => {
    return (
        <div>
            <p>{post.userId} {post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;