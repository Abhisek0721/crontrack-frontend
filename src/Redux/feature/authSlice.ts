import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { NewUSerResponse,LoginuserResponse } from "../util/InterfaceTypes";

 interface User{
    user: NewUSerResponse | LoginuserResponse | null;
}
const storedUser = localStorage.getItem('user');
const initialState: User = { 
user: storedUser ? JSON.parse(storedUser) : null
};


export const authSlice = createSlice({
    initialState,
    name: 'auth',

    reducers: {
        setUserInfo: (state, action: PayloadAction<NewUSerResponse | LoginuserResponse>) => {
            state.user = action.payload;

            //always store data in console in the format of stringify and reterive data in the format of object
            localStorage.setItem("user", JSON.stringify(state.user));

        },

        removeUserInfo: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    }
})

export const {setUserInfo,removeUserInfo } = authSlice.actions
export default authSlice.reducer;