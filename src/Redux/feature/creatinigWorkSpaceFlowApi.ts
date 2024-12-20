import { apiSlice } from "../api/apiSlice";


export const creatingWorkSpaceFlowApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        createWorkSpaceName : build.mutation({
            query: (body) => ({
                url: "/api/v1/workspace/", 
                method: "POST",
                body
            })
        }),

        updateWorkSpaceName: build.mutation({
            query: (body) => ({
                url: "/api/v1/workspace/",
                method: "PATCH",
                body
            })
        }),

        //NOTE: for POST,PUT,PATCH,DELETE jaise request ke liye mutation ka use hota  h GET req ke liye query ka use hota h 
        getWorkSpace: build.query({
            query: (workspaceId) => `api/v1/workspace/:${workspaceId}`,
        }),

        sendInviteMemberEmail: build.mutation({
            query: (body) => ({
                url: "/api/v1/workspace/invite-members",
                method: "POST",
                body
            })
        }),

        addMemberToWorkSpace: build.mutation({
            query: (body) => ({
                url: "/api/v1/workspace/add-member-to-workspace",
                method: "PATCH",
                body
            })
        }),

        inviteMemberToWorkSpace: build.mutation({
            query: (body) => ({
                url: "/api/v1/workspace/invite-members",
                method: "POST",
                body
            })
        }),

        acceptInvitationInWorkspace: build.mutation({
            query: (body) => ({
                url: "/api/v1/workspace/add-member-to-workspace",
                method: "PATCH",
                body
            })
        }),

        updateWorkSpace: build.mutation({
            query: (body) => ({
                url: "/api/v1/workspace/",
                method: "PATCH",
                body
            })
        }),

        getallworkspace: build.query({
            query: () => '/api/v1/workspace/get-all-workspaces/',
        }),

        changePassword: build.mutation<void, {current_password: string, new_password: string}>({
            query: (body) => ({
                url: "/api/v1/user/change-password/",
                method: "PATCH",
                body
            })
        })

    })
})

export const {
    useCreateWorkSpaceNameMutation,
    useUpdateWorkSpaceNameMutation,
    useGetWorkSpaceQuery,
    useSendInviteMemberEmailMutation,
    useAddMemberToWorkSpaceMutation,
    useInviteMemberToWorkSpaceMutation,
    useAcceptInvitationInWorkspaceMutation,
    useUpdateWorkSpaceMutation,
    useGetallworkspaceQuery,
    useChangePasswordMutation
} = creatingWorkSpaceFlowApi