import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        isLogged: false,
        token: null,
    },
    reducers: {
        start: (state, action) => {
            state.isLogged = true;
            state.token = action.payload;
        },
        end: (state) => {
            state.isLogged = false;
            state.token = null;
        }
    },
})

export const { start, end } = sessionSlice.actions

export default sessionSlice.reducer