import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        value: {},
    },
    reducers: {
        setEmployeeState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setEmployeeState } = employeeSlice.actions

export default employeeSlice.reducer