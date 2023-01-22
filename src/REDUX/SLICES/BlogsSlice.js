import { createSlice } from '@reduxjs/toolkit'

export const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        value: [],
    },
    reducers: {
        setBlogsState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setBlogsState } = blogsSlice.actions

export default blogsSlice.reducer