import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cars: [],
    carForUpdate:null,
    trigger: null
}
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        getAll(state, action) {
            state.cars = action.payload
        },
        carForUpdate(state,action){
            state.carForUpdate = action.payload
        },
        updatePage(state){
            state.trigger = !state.trigger
        }
    }
})

const carActions = {...carSlice.actions}
const {reducer: carReducer} = carSlice

export {carActions,carReducer}