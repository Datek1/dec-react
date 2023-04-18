import axios from "axios";
import {baseURL, carsURL} from "../configs/urls";

const axiosService = axios.create({baseURL})
const axiosCarService = axios.create({baseURL:carsURL})

export {
    axiosService,
    axiosCarService
}