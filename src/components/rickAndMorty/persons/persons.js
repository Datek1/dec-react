import React from 'react';
import Person from "../person/person";

const Persons = ({ram}) => {
    return (
        <div>
            {
                ram.map((value)=>(<Person value ={value} key ={value.id}/>))
            }
        </div>
    );
};

export default Persons;