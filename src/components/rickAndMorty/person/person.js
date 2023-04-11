import React from 'react';

const Person = ({value}) => {
    return (
        <div>
            <h2>id - {value.id} Name - {value.name}</h2>
            <h2>Status - {value.status} Species - {value.species}</h2>
            <h2>Gender - {value.gender}</h2>
            <img src={value.image} alt=""/>
            <hr/>
        </div>
    );
};

export default Person;