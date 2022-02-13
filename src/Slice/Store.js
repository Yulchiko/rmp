import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./Movies.slice/Movies.slice";
import singleMovieReducer from "./Movie.slice/Movie.slice";
import genresReducer from "./Genres.slice/Genres.slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: singleMovieReducer,
        genres: genresReducer,
    }
});

export default store;