import { createSlice } from '@reduxjs/toolkit'

export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        value: [],
    },
    reducers: {
        setEmployeesState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setEmployeesState } = employeesSlice.actions

export default employeesSlice.reducer