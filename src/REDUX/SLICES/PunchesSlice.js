import { createSlice } from '@reduxjs/toolkit'

export const punchesSlice = createSlice({
    name: 'punches',
    initialState: {
        value: [],
    },
    reducers: {
        setPunchesState: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPunchesState } = punchesSlice.actions

export default punchesSlice.reducer