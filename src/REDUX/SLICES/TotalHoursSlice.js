import { createSlice } from '@reduxjs/toolkit'

export const totalHoursSlice = createSlice({
    name: 'totalHours',
    initialState: {
        value: "",
    },
    reducers: {
        setTotalHoursState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTotalHoursState } = totalHoursSlice.actions

export default totalHoursSlice.reducer