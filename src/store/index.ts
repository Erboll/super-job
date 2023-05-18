import { configureStore } from "@reduxjs/toolkit";
import { jobApi } from "./super-job/superJob.api";


export const store  = configureStore({
    reducer:{
        [jobApi.reducerPath]: jobApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware),
})