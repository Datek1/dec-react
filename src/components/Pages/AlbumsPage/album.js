import React from 'react';

const Album = ({albums}) => {
    return (
        <div className={'wrap'}>
            <p>{albums.id}</p>
            <p>{albums.title}</p>
        </div>
    );
};

export default Album;