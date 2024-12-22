import { apiSlice } from "../api/apiSlice";


export const contentManagementServiceApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        AddFacebookPage: build.mutation({
            query: (body) => ({
                url: "/api/v1/social-media-account/add-facebook-page",
                method: "POST",
                body
            })
        })
    })
})

export const {
    useAddFacebookPageMutation
} = contentManagementServiceApi