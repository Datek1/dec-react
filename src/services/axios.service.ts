import axios, {AxiosResponse} from "axios";
import {baseURL, carsURL} from "../configs/urls";
type IRes<T> = Promise<AxiosResponse<T>>
const axiosService = axios.create({baseURL})
const axiosCarService = axios.create({baseURL:carsURL})

export {
    axiosService,
    axiosCarService
}
export type {
    IRes
}