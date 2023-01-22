import { createSlice } from '@reduxjs/toolkit'

export const blogPostSlice = createSlice({
    name: 'blogPost',
    initialState: {
        value: {},
    },
    reducers: {
        setBlogPostState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setBlogPostState } = blogPostSlice.actions

export default blogPostSlice.reducer