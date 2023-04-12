import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = ({getPost}) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => setPosts(response))
    }, [])

    return (
        <div>
            {
                posts.map(value => <Post posts={value} getPost={getPost} key={value.id}/>)

            }
        </div>
    );
};

export default Posts;