import React from 'react';
import '../../../style.css'

const Todo = ({todos}) => {
    return (
        <div className={'wrap'}>
            <p>id-{todos.id}</p>
            <p>title-{todos.title}</p>
            <p>Completed-{todos.completed.toString()}</p>
        </div>
    );
};

export default Todo;