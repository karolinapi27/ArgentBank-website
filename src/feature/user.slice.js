import { createSlice } from "@reduxjs/toolkit";

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isLoggedIn: false,
    user: null,
    error: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const { loginUser, logoutUser, setError } = userAuthSlice.actions;
export default userAuthSlice.reducer;
