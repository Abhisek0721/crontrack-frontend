import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {LoginuserResponse } from "../util/InterfaceTypes";

interface userWorkspace{
id: string
role: string,
workspace: {
    created_at: string,
    workspaceId: string,
    workspace_name: string
}
}
 interface User{
    user: {id: string,
        email: string,
        full_name: string,
        verified: boolean,
        google_id: null | string,
        message: string
        profile_picture: null | string,
        bio: null | string,
        created_at: Date
        updated_at: Date } | null
    access_token: string | null;
    user_workspace: Array<userWorkspace> | null;
}

const storedUser = localStorage.getItem('user');
const isaccess_token = localStorage.getItem('access_token');
const isuser_workspace = localStorage.getItem('user_workspace');

const initialState: User = { 
user: storedUser ? JSON.parse(storedUser) : null,
access_token: isaccess_token ? JSON.parse(isaccess_token) : null,
user_workspace: isuser_workspace ? JSON.parse(isuser_workspace) : null
};


export const authSlice = createSlice({
    initialState,
    name: 'auth',

    reducers: {
        setUserInfo: (state, action: PayloadAction<LoginuserResponse>) => {
            const {access_token, user, user_workspace} = action.payload
            state.user = user
            state.access_token = access_token,
            state.user_workspace = user_workspace
            


            //always store data in console in the format of stringify and reterive data in the format of object(parse)
            localStorage.setItem("access_token", JSON.stringify(access_token));
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("user_workspace", JSON.stringify(user_workspace));
        },
        removeUserInfo: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            localStorage.removeItem('access_token');
            localStorage.removeItem('user_workspace');
        }
    }
})

export const {setUserInfo,removeUserInfo } = authSlice.actions
export default authSlice.reducer;