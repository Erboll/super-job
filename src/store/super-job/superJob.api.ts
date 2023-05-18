import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://startup-summer-2023-proxy.onrender.com/2.0/";

export const jobApi = createApi({
    reducerPath:'superJob/api',
    baseQuery:fetchBaseQuery({
        baseUrl:url,
    }),
    endpoints:build => ({
        searchVacancy: build.query<any, string>({
            query: (search:string) => ({
                url:`vacancies/?t=4&count=100`,
                params:{
                    q:search
                },
                headers: {
                    "x-secret-key": process.env.REACT_APP_API_KEY,
                    "X-Api-App-Id": process.env.REACT_APP_SECRET_KEY,
                }
            })
        })
    })
})


 export const {useSearchVacancyQuery} = jobApi