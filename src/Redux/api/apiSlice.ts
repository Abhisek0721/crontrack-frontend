import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { getToken } from "../util/getUserDetailFromBrowser";
import 'dotenv'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
        prepareHeaders: (header) => {
            const token = getToken();
            if(token) {
                header.set('Authorization', `Bearer ${token}`)
            }
        }
    }),
    endpoints: () => ({}),
})