import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Fonction pour effectuer la connexion de l'utilisateur
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentials, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', userCredentials);
      return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const authService = {
  loginUser,
};
