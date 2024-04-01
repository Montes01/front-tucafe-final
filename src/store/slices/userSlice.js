import { createSlice } from "@reduxjs/toolkit";

const initialState = null

export const userSlice = createSlice({
    name:  "user",
    initialState,
    reducers: {
        login: (_, action) => {
            return action.payload
        },
        logout: () => null
    }
})

export const login = userSlice.actions.login
export const logout = userSlice.actions.logout


export default userSlice.reducer;