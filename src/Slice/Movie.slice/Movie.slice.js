import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {MovieService} from "../../Service/MovieService/MovieService";

export const getSingleMovie = createAsyncThunk(
    'singleMovieSlice/getSingleMovie',
    async ({id}, {rejectWithValue}) => {

        try {
            const movie = await MovieService.getSingleMovieData(id);
            return movie;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const singleMovieSlice = createSlice({
    name: 'singleMovieSlice',
    initialState: {
        movie: null,
        state: null,
        error: null
    },
    extraReducers: {
        [getSingleMovie.pending]: (state) => {
                       state.status = 'loading';
            state.error = null;

        },
        [getSingleMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movie = action.payload;

        },
        [getSingleMovie.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        }
    }
});

const singleMovieReducer = singleMovieSlice.reducer;
export default singleMovieReducer;