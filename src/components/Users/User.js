import React, {useState} from 'react';
import FullComments from "./UserComments/FullComments";


const User = ({users}) => {
    const [commentsId, setCommentsId] = useState(null)
    const getCommentsId = (id) => {
        setCommentsId(id)
    }

    return (
        <div>
            <h2>id - {users.id} Name - {users.name}</h2>
            <h2>Username - {users.username} Email - {users.email}</h2>
            <address>
                <p>Home address
                    - {users.address.street} {users.address.suite} {users.address.city} {users.address.zipcode}</p>
                <p>Geo - {users.address.geo.lat} {users.address.geo.lng}</p>
            </address>
            <p>Phone - {users.phone}</p>
            <p>Website - {users.website}</p>
            <p>Company - {users.company.name}</p>
            <p>Catch Phrase - {users.company.catchPhrase}</p>
            <p>Bs- {users.company.bs}</p>
            <button onClick={() => {
                getCommentsId(users.id)
            }}>All comments
            </button>

            {commentsId &&
                <>
                    <FullComments commentsId={commentsId}/>
                </>}

        </div>
    );
};

export default User;