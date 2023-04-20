import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {placeServices} from "../../services/placeServices";
import PostDetail from "./PostDetail";


const PostDetails = () => {
    const {state} = useLocation()
    const [post, setPost] = useState(null)
    useEffect(() => {
        placeServices.getPostById(state.postId).then(value => setPost(value.data))
    }, [state.id])
    return (
        <div>

            {post &&
                <PostDetail key={post.id} post={post}/>
            }
        </div>
    );
};

export default PostDetails;