import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: [],
    },
    reducers: {
        setProductsState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setProductsState } = productsSlice.actions

export default productsSlice.reducer