import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { getToken } from "../util/getUserDetailFromBrowser";
import { constant } from "@/constants/index";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: constant.API_URL,
        prepareHeaders: (header) => {
            const token = getToken();
            if(token) {
                header.set('Authorization', `Bearer ${token}`)
            }
        }
    }),
    endpoints: () => ({}),
})