import React, {useEffect, useState} from 'react';

import {placeServices} from "../../../services/placeServices";
import Todo from "./Todo";
import '../../../style.css'

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        placeServices.getAllTodos().then(value => setTodos(value.data))
    }, [])
    return (
        <div className={'wrapper'}>
            {
                todos.map(value => <Todo key={value.id} todos={value}/>)
            }
        </div>
    );
};

export default Todos;