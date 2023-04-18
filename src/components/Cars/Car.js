import React from 'react';
import '../../styles/cars.css'
import {carService} from "../../services/car.service/car.service";

const Car = ({cars, setAllCars,setCarUpdate}) => {
    const deleteCar = async () => {
        await carService.deleteById(cars.id)
        setAllCars(prev => !prev)
    }
    return (
        <div className={'carWrapper'}>
            <h4>id - {cars.id}</h4>
            <h4>brand - {cars.brand}</h4>
            <h4>price - {cars.price}</h4>
            <h4>year - {cars.year}</h4>
            <button onClick={() => deleteCar()}>Delete</button>
            <button onClick={()=> setCarUpdate(cars)}>Update</button>
        </div>
    );
};

export default Car;