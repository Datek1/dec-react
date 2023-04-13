import React, {useEffect, useState} from 'react';
import FullComment from "./FullComment";

const FullComments = ({commentsId}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + commentsId + '/posts')
            .then(response => response.json())
            .then(response => setComments(response))
    }, [])

    return (
        <div>
            {

                comments.map(value => <FullComment comments={value} key={value.id}/>)
            }
        </div>
    );
};

export default FullComments;