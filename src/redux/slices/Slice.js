import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    genres: [],
    keywords: [],
    movie: {},
    total_pages: 0,
    errors: null
}

  const getAllMovies =  createAsyncThunk(
    'movieSlice/getAllMovies',
    async (params, thunkAPI)=>{
    try {
        const {data} = await movieService.getAllMovies(params);
        return data
    } catch (e) {
        return  thunkAPI.rejectWithValue(e.response.data)
            }
        }
    )

const getAllGenres =  createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, thunkAPI)=>{
        try {
            const {data} = await movieService.getAllGenres();
            return data
        } catch (e) {
            return  thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getAllKeywords =  createAsyncThunk(
    'movieSlice/getAllKeywords',
    async (params, thunkAPI)=>{
        try {
            const {data} = await movieService.getAllKeywords(params);
            return data
        } catch (e) {
            return  thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await movieService.getMovieById(id);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    }
)

 const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        getAllMovies: (state, action) => {
            console.log(action);
            state.movies = action.payload
        }
    },
     extraReducers: builder =>
         builder
             .addCase(getAllMovies.fulfilled, (state, action) => {
                 const {results, total_pages} = action.payload;
                 state.movies = results
                 state.loading = false
                 state.total_pages = total_pages
             })
             .addCase(getMovieById.fulfilled, (state, action) => {
                 state.movie = action.payload
                 state.loading = false
             })
             .addCase(getAllGenres.fulfilled, (state, action) => {
                 state.genres = action.payload.genres
                 state.loading = false
             })
             .addCase(getAllKeywords.fulfilled, (state, action) => {
                 state.keywords = action.payload.results
                 state.loading = false
             })
             .addDefaultCase((state, action) => {
             const [actionStatus] = action.type.split('/').slice(-1);
             state.loading = actionStatus === 'pending';
         })

})


const {reducer:movieReducer} = movieSlice;

const movieActions = {
    getAllMovies,
    getMovieById,
    getAllGenres,
    getAllKeywords
}





export {
    movieReducer,
    movieActions
}