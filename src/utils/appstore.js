import { configureStore } from "@reduxjs/toolkit";
import userDetails from './userSlice'
const appStore = configureStore({
    reducer: {
        userDetails
    }
})
export default appStore