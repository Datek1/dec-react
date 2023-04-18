import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const userService={
    create:(user)=>axiosService.post(urls.users,user)
}
export {
    userService
}