import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const commentService ={
    create:(comment)=> axiosService.post(urls.comments,comment)
}
export {
    commentService
}