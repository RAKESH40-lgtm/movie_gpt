import { configureStore } from "@reduxjs/toolkit";
import userDetails from './userSlice'
import { movieData } from "./moviesSLice";
const appStore = configureStore({
    reducer: {
        userDetails,movieData
    }
})
export default appStore