import React, {useEffect, useState} from 'react';
import {placeServices} from "../../../services/placeServices";
import Comment from "./Comment";
import {Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        placeServices.getAllComments().then(value => setComments(value.data))
    }, [])
    return (
        <div>
            <Outlet/>
            {
                comments.map(value => <Comment key={value.id} comments={value}/>)
            }
        </div>
    );
};

export default Comments;