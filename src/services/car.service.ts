import {axiosCarService, IRes} from "./axios.service";
import {ICar} from "../interfaces/car.interface";
import {urls} from "../configs/urls";

const carService = {
    getAll:():IRes<ICar[]> => axiosCarService.get(urls.cars),
    create:(car:ICar):IRes<ICar>=> axiosCarService.post(urls.cars,car),
    deleteById:(id:number):IRes<void>=> axiosCarService.delete(`${urls.cars}/${id}`),
    updateById:(id:number,car:ICar):IRes<ICar>=> axiosCarService.put(`${urls.cars}/${id}`,car)

}
export {carService}