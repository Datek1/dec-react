import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service/car.service";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../../validators/car.validator";

const CarForm = ({setAllCars,carUpdate}) => {
    const {register, reset, handleSubmit,setValue, formState:{errors,isValid}} = useForm({mode:'all',resolver:joiResolver(carValidator)})
    useEffect(()=>{
        if (carUpdate){
            setValue('brand', carUpdate.brand, {shouldValidate:true})
            setValue('price', carUpdate.price, {shouldValidate:true})
            setValue('year', carUpdate.year, {shouldValidate:true})
        }
    },[carUpdate])
    const saveCar = async (car) => {
        await carService.create(car)
        setAllCars(prev => !prev)
        reset()
    }
    const update = async (car) => {
        await carService.updateById(carUpdate.id,car)
        setAllCars(prev=>!prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carUpdate? update: saveCar)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})} />
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carUpdate?'Update':'Save'}</button>
        </form>
    );
};

export default CarForm;