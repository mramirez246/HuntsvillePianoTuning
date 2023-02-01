import { createSlice } from '@reduxjs/toolkit'

export const pageViewsSlice = createSlice({
    name: 'pageViews',
    initialState: {
        value: [],
    },
    reducers: {
        setPageViewsState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPageViewsState } = pageViewsSlice.actions

export default pageViewsSlice.reducer