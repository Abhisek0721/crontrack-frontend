import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    text: string,
    images: Array<string>,
} = {
    text: '',
    images: [],
}

export const textSlice = createSlice({
    initialState,
    name: "text",
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        setImage: (state, action) => {
            state.images?.push(action.payload);
            console.log("from set image",state?.images)
        },
        clearImage: (state, action) => {
            
           state.images = state?.images?.filter((preview) => {
                return preview !== action?.payload
            })
            console.log(state?.images);
        }
    }
})

export const {setText, clearImage,setImage} = textSlice.actions
export default textSlice.reducer