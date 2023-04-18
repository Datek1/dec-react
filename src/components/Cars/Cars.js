import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service/car.service";
import Car from "./Car";
import CarForm from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState([])
    const [allCars, setAllCars] = useState(null)
    const [carUpdate,setCarUpdate] = useState(null)
    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [allCars])
    return (
        <div>
            <CarForm setAllCars={setAllCars} carUpdate = {carUpdate}/>
            {
                cars.map(value => <Car cars={value} key={value.id} setAllCars={setAllCars} setCarUpdate={setCarUpdate}/>)
            }
        </div>
    );
};

export default Cars;