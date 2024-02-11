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

// Fonction pour récupérer le profil de l'utilisateur
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().user.user.body.token;
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });
      return response.data;
      
      
    } catch (error) {
      console.error("Erreur lors de la récupération du profil :", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

// Fonction de mise à jour du profil de l'utilisateur
export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (userData, { getState, rejectWithValue }) => {
    const token = getState().user.user.body.token; 
    try {
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', userData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil :", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);




export const authService = {
  loginUser,
  fetchUserProfile,
};