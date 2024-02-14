import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile } from '../services/authService';

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    profile: null,
    token:null,
    loading: false,
    error: null,
  },
  reducers: {
   
    clearUserProfile: (state) => {
      state.profile = null;
      state.token = null; 
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.body; 
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })   
  },
});

export const { clearUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
