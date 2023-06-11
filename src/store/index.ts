import { configureStore } from "@reduxjs/toolkit";
import { jobApi } from "./super-job/superJob.api";
import { superJobReducer     } from "./super-job/super.slice";


export const store  = configureStore({
    reducer:{
        [jobApi.reducerPath]: jobApi.reducer,
        superJob:superJobReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware),
})



export type RootState = ReturnType<typeof store.getState>