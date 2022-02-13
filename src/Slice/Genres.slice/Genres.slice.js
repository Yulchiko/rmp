import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {GenresService} from "../../Service/GenresService/GenresService";


export const getAllGenres = createAsyncThunk(
    'moviesSlice/getAllGenres',
    async (_, {rejectWithValue}) => {

        try {
            const movies = await GenresService.getRandomGenres();
            return movies;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: {
        genreNamesMap: {},
        state: null,
        error: null
    },

    extraReducers: {
        [getAllGenres.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            const {genres} = action.payload;

            state.genreNamesMap = genres.reduce((genresMap, genre) => {
                genresMap[genre.id] = genre.name;
                return genresMap;
            }, {});
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const genresReducer = genresSlice.reducer;
export default genresReducer;