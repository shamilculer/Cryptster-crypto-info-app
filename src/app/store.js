import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { cryptoApi } from "../Services/cryptoApi";
import { newsApi } from "../Services/newsApi";

import navarReducer from "./Slices/navbarSlice/navbarSlice";

const store = configureStore({
    reducer : {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [newsApi.reducerPath] : newsApi.reducer,
        navBar : navarReducer,
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(cryptoApi.middleware, newsApi.middleware)
    
})

export default store