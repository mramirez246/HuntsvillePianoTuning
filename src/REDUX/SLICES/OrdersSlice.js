import { createSlice } from '@reduxjs/toolkit'

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        value: [],
    },
    reducers: {
        setOrdersState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setOrdersState } = ordersSlice.actions

export default ordersSlice.reducer