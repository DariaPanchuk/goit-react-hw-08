import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        name: ''
    },
    reducers: {
            filterName(state, action) {
                state.name = action.payload;
        }
    }
})

export const { filterName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
