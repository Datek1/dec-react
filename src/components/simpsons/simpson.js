import React from 'react';

const Simpson = ({value}) => {
    return (
        <div>
            <h2>Name - {value.name} Surname - {value.surname}</h2>
            <h2>Age - {value.age}</h2>
            <p>{value.info}</p>
            <img src={value.photo} alt=""/>
            <hr/>
        </div>
    );
};

export default Simpson;