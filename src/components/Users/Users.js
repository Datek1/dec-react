import React, {useEffect, useState} from 'react';
import User from "./User";


const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => setUsers(response))
    }, [])

    return (
        <div>
            {
                users.map(value => <User users={value} key={value.id}/>)
            }
        </div>
    );
};

export default Users;