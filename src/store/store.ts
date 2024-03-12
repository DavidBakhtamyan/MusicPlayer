import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./slices/musicSlice";

const store = configureStore({
    reducer:{
        music: musicSlice
    }
})

export default store