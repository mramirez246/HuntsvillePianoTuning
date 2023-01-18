import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        value: false,
    },
    reducers: {
        setLoadingState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLoadingState } = loadingSlice.actions

export default loadingSlice.reducer