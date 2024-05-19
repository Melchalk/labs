import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
    accessToken: string | null
}

const initialState: AuthState = {
    accessToken: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.accessToken = action.payload,
            localStorage.setItem('accessToken', action.payload)
        }
    },
})

export const { addToken } = authSlice.actions