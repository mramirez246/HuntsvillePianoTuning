import { createSlice } from '@reduxjs/toolkit'

export const scheduledEventsSlice = createSlice({
    name: 'scheduledEvents',
    initialState: {
        value: [],
    },
    reducers: {
        setScheduledEventsState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setScheduledEventsState } = scheduledEventsSlice.actions

export default scheduledEventsSlice.reducer