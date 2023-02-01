import { createSlice } from '@reduxjs/toolkit'

export const dashUserSlice = createSlice({
    name: 'dashUser',
    initialState: {
        value: {},
    },
    reducers: {
        setDashUserState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setDashUserState } = dashUserSlice.actions

export default dashUserSlice.reducer