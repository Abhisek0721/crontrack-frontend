import { createSlice,PayloadAction } from "@reduxjs/toolkit";

 interface User{
    user: string | null;
}

const initialState: User = { 
user: JSON.parse(localStorage.getItem('user') || "null"),
};


export const authSlice = createSlice({
    initialState,
    name: 'auth',

    reducers: {
        setUserInfo: (state, action: PayloadAction<string>) => {
            state.user = action.payload;
            localStorage.setItem("user", state.user);

        },

        removeUserInfo: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    }
})

export const {setUserInfo,removeUserInfo } = authSlice.actions
export default authSlice.reducer;