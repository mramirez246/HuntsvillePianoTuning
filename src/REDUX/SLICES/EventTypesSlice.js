import { createSlice } from '@reduxjs/toolkit'

export const eventTypesSlice = createSlice({
    name: 'eventTypes',
    initialState: {
        value: [],
    },
    reducers: {
        setEventTypesState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setEventTypesState } = eventTypesSlice.actions

export default eventTypesSlice.reducer