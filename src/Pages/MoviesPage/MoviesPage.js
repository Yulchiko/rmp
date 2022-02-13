import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Movie from "../../Component/Movie/Movie";

import './MoviesPage.css'
import {getAllMovies} from "../../Slice/Movies.slice/Movies.slice";

export default function MoviesPage (){
    const {movies, pageInfo, status, error} = useSelector(state => state.movies);
    const {total_pages} = pageInfo;
    const dispatch = useDispatch();
    const {page} = useParams();
    const currentPage = +(page ?? 1);

    useEffect(() => {
        dispatch(getAllMovies({page}));
    }, [page]);

    return (
        <>
            <div className="movies-content">
                {status === 'loading' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className="pagination">
                {currentPage > 1 && (
                    <NavLink to={`/movies/page-${currentPage - 1}`}><button>PREVIOUS</button></NavLink>
                )}
                {total_pages && currentPage < total_pages && (
                    <NavLink to={`/movies/page-${currentPage + 1}`}><button>NEXT</button></NavLink>
                )}
            </div>
        </>

    );
};
