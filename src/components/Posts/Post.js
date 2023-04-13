import React, {useState} from 'react';
import FullDescription from "./FullDescription";


const Post = ({posts}) => {
    const [descPost, setDescPost] = useState(null)
    const getPost = (post) => {
        setDescPost({...post})
    }
    return (
        <>
            <h2>id - {posts.id} title - {posts.title}</h2>
            <button onClick={() => {getPost(posts)}}>details</button>
            {descPost &&
                <>
                    <FullDescription descPost={descPost}/>
                </>}
        </>
    );
};

export default Post;