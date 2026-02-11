import { createSlice } from "@reduxjs/toolkit";

const moviesData =createSlice({
    name:'movies',
    initialState : {
        nowPlayingMovies:null,
        trailer:null
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideoDetails :(state , action)=>{
            state.trailer =action.payload
        }
    }
})
export const {addNowPlayingMovies ,addTrailerVideoDetails} = moviesData.actions
export  const movieData = moviesData.reducer