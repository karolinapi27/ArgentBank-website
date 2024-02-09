import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from '../services/authService';

export const userAuthSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers:(builder)=>{
    builder
    .addCase(loginUser.pending,(state)=>{
      state.loading = true;
      state.user = null;
      state.error = null;
    })
    .addCase(loginUser.fulfilled,(state, action)=>{
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase(loginUser.rejected,(state, action)=>{
      state.loading = false;
      state.user = null;
      console.log(action.error.message);
      if(action.error.message === 'Request failed with status code 400'){
        state.error = 'Access Denied Invalid Credentials';
      }
      else{
        state.error = action.error.message;
      }

      state.error = null;
    })
    
  }
});


export const { logoutUser, setError } = userAuthSlice.actions;
export default userAuthSlice.reducer;
