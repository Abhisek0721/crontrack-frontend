import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { getToken } from "../util/getUserDetailFromBrowser";
import { constant } from "@/constants/index";
import { removeUserInfo } from "../feature/authSlice";
import toast from "react-hot-toast";

// customize baseQuery to handle error like 401
const customizeBaseQuery = async(arg:any, api:any, extraOptions:any) => {

    const baseQuery = fetchBaseQuery({
        baseUrl: constant.API_URL,
        prepareHeaders:(header) => {
            const token = getToken();
            if(token) {
                header.set('Authorization', `Bearer ${token}`)
            }
            return header
        }
    });



    // arg: Represents the details of the specific API call being made.
    // api: Provides access to the Redux Toolkit Query API’s utilities and the Redux store.
    // extraOptions: Additional options provided when the query or mutation is invoked.

    // Make the API request
    const response: any = await baseQuery(arg, arg, extraOptions)

    //now handle the response;
    if(response?.error && response?.error?.status === 401){
       api.dispatch(removeUserInfo());
       toast.error(`${response?.error?.data?.message}`,{duration: 3000});
    }

    return response; // Return the original response
}

//create apislice 
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: customizeBaseQuery,
    endpoints: () => ({}),
})