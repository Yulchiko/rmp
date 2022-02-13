import axiosService from "../AxiiosService/AxiosService";
import {urls} from "../Url/Url";

export const GenresService = {
    getRandomGenres: () => axiosService.get(`${urls.genres}`).then(value => value.data),
    getSingleData: (id) => axiosService(`${urls.genres}/${id}`)
};