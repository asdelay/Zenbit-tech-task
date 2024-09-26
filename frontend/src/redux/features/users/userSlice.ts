import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type InputData = {
  loginEmail?: string;
  loginPassword?: string;
}

interface UserState {
    loginInputData: InputData
    isUserLoggedIn: boolean
}

// Define the initial state using that type
const initialState: UserState = {
  loginInputData: {
    loginEmail: '',
    loginPassword: '',
  },
  isUserLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateEmail : (state, action: PayloadAction<string>) => {
      state.loginInputData.loginEmail = action.payload
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.loginInputData.loginPassword = action.payload
    },
    signOut: (state) => {
      state.isUserLoggedIn = false
    },
    logIn: (state) => {
      state.isUserLoggedIn = true
    }
  },
})

export const { updateEmail, updatePassword, signOut, logIn} = userSlice.actions

export default userSlice.reducer