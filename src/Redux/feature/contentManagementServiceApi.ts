import { apiSlice } from "../api/apiSlice";


export const contentManagementServiceApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        facebook: build.query({
            query: (workspaceId) => {
                const url = `/api/v1/social-auth/facebook?workspaceId=${workspaceId}`;
                console.log("Generated URL:", url); // Debugging
                return url;}
        })
    })
})

export const {
    useFacebookQuery
} = contentManagementServiceApi