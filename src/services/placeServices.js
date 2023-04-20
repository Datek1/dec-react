import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const placeServices = {
    getAllComments: () => axiosService.get(urls.comments),
    getAllTodos: () => axiosService.get(urls.todos),
    getAllAlbums: () => axiosService.get(urls.albums),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`)
}
export {placeServices}