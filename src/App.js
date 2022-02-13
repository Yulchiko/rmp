import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Route, Routes } from 'react-router-dom';

import Layout from "./Component/Layout/Layout";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import SingleMoviePage from "./Pages/SingleMoviePage/SingleMoviePage";

import './App.css';
import {getAllGenres} from "./Slice/Genres.slice/Genres.slice";

export default function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres())
  },[]);

  return (
      <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="movies" element={<MoviesPage/>} />
          <Route path="movies/:id" element={<SingleMoviePage/>}/>
          <Route path="movies/page-:page" element={<MoviesPage/>}/>
        </Route>
      </Routes>
      </div>
  );
}

