import { createSlice } from '@reduxjs/toolkit'

export const successSlice = createSlice({
    name: 'success',
    initialState: {
        value: false,
    },
    reducers: {
        setSuccessState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSuccessState } = successSlice.actions

export default successSlice.reducer