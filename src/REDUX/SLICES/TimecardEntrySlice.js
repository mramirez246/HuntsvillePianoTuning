import { createSlice } from '@reduxjs/toolkit'

export const timecardEntrySlice = createSlice({
    name: 'timecardEntry',
    initialState: {
        value: {},
    },
    reducers: {
        setTimecardEntryState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTimecardEntryState } = timecardEntrySlice.actions

export default timecardEntrySlice.reducer