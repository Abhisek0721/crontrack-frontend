import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { useAppSelecter } from "../Hooks/store"
import 'dotenv'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
        prepareHeaders: (header) => {
            const token = useAppSelecter((state) => state.auth.user?.access_token);
            if(token) {
                header.set('Authorization', `Bearer ${token}`)
            }
        }
    }),
    endpoints: () => ({}),
})