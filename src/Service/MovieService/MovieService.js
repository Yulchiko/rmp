import axiosService from "../AxiiosService/AxiosService";
import {urls} from "../Url/Url";

export const MovieService = {
    getRandomMovies: (page) => axiosService.get(`${urls.movies}`, {params: {page}}).then(value => value.data),
    getSingleMovieData: (id) => axiosService.get(`${urls.movie}/${id}`).then(value => value.data)
};