import {axiosCarService} from "../axios.service";
import {urls} from "../../configs/urls";

const carService = {
    getAll:()=> axiosCarService.get(urls.cars),
    create:(car)=> axiosCarService.post(urls.cars,car),
    deleteById:(id)=> axiosCarService.delete(`${urls.cars}/${id}`),
    updateById:(id,car)=> axiosCarService.put(`${urls.cars}/${id}`,car)
}
export {carService}