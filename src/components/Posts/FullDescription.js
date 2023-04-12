import React from 'react';

const FullDescription = ({descPost}) => {
    return (
        <>
            <h5>userid -{descPost.userId} body - {descPost.body}</h5>
        </>
    );
};

export default FullDescription;