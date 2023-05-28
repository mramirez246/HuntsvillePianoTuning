import { createSlice } from '@reduxjs/toolkit'

export const orderTotalSlice = createSlice({
    name: 'orderTotal',
    initialState: {
        value: 0,
    },
    reducers: {
        setOrderTotalState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setOrderTotalState } = orderTotalSlice.actions

export default orderTotalSlice.reducer