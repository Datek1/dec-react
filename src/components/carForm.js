import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../redux";

const CarForm = () => {
    const {carForUpdate} = useSelector(state => state.cars);
    const {register, reset, handleSubmit,setValue} = useForm()
    const dispatch = useDispatch();
    useEffect(() => {
        if (carForUpdate) {
            setValue('brand',carForUpdate.brand)
            setValue('year',carForUpdate.year)
            setValue('price',carForUpdate.price)
        }
    },[carForUpdate,setValue])
    const save = async (car) => {
        await carService.create(car)
        dispatch(carActions.updatePage())
        reset()
    }
    const update = async (car)=>{
        await carService.updateById(carForUpdate.id,car)
        dispatch(carActions.updatePage())
        reset()
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" {...register('brand')} placeholder={'brand'}/>
            <input type="text" {...register('year')} placeholder={'year'}/>
            <input type="text" {...register('price')} placeholder={'price'}/>
            <button>{carForUpdate?'Update':'Save'}</button>
        </form>
    );
};

export {CarForm};