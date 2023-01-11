import { createSlice } from '@reduxjs/toolkit'

export const testSlice = createSlice({
    name: 'test',
    initialState: {
        value: "",
    },
    reducers: {
        setTestState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTestState } = testSlice.actions

export default testSlice.reducer