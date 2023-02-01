import { createSlice } from '@reduxjs/toolkit'

export const contactEntriesSlice = createSlice({
    name: 'contactEntries',
    initialState: {
        value: [],
    },
    reducers: {
        setContactEntriesState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setContactEntriesState } = contactEntriesSlice.actions

export default contactEntriesSlice.reducer