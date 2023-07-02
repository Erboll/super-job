import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Root, RootCatalog } from "../../types";

const url = "https://startup-summer-2023-proxy.onrender.com/2.0/";

export const jobApi = createApi({
    reducerPath:'superJob/api',
    baseQuery:fetchBaseQuery({
        baseUrl:url,
    }),
    endpoints:build => ({
        searchVacancy: build.query<Root, string>({
            query: () => ({
                url:`vacancies/?t=4&count=10`,
                headers: {
                    "x-secret-key": process.env.REACT_APP_API_KEY,
                    "X-Api-App-Id": process.env.REACT_APP_SECRET_KEY,
                }
            })
        }),
        catalogJobs:build.query<RootCatalog, string>({
            query:() => ({
                url:`catalogues/`,
                headers:{
                    "x-secret-key": process.env.REACT_APP_API_KEY,
                    "X-Api-App-Id": process.env.REACT_APP_SECRET_KEY,
                }
            })
        }),
    })

})


 export const {useSearchVacancyQuery , useCatalogJobsQuery } = jobApi