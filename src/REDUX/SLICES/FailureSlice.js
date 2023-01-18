import { createSlice } from '@reduxjs/toolkit'

export const failureSlice = createSlice({
    name: 'failure',
    initialState: {
        value: false,
    },
    reducers: {
        setFailureState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setFailureState } = failureSlice.actions

export default failureSlice.reducer