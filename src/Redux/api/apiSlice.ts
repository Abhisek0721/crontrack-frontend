import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { getToken } from "../util/getUserDetailFromBrowser";
import 'dotenv'

console.log("base_url",  import.meta.env.VITE_API_URL);
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders: (header) => {
            const token = getToken();
            if(token) {
                header.set('Authorization', `Bearer ${token}`)
            }
        }
    }),
    endpoints: () => ({}),
})