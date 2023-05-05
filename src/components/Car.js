import React from 'react';

import {carService} from "../services";
import {useDispatch} from "react-redux";
import {carActions} from "../redux";


const Car = ({car}) => {
    const dispatch = useDispatch();
    const deleteById = async () => {
        await carService.deleteById(car.id)
        dispatch(carActions.updatePage())
    }
    return (
        <div>
            <p>Id - {car.id}</p>
            <p>Brand - {car.brand}</p>
            <p>price - {car.price}</p>
            <p>Year - {car.year}</p>
            <button onClick={deleteById}>Delete</button>
            <button onClick={()=> dispatch(carActions.carForUpdate(car))}>Update</button>
        </div>
    );
};

export {Car};