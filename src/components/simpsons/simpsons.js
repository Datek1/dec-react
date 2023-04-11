import React from 'react';
import Simpson from "./simpson";

const Simpsons = ({simpsons}) => {
    return (
        <div>
            {
                simpsons.map((value , index) => (<Simpson value={value} key = {index}/>))
            }
        </div>
    );
};

export default Simpsons;