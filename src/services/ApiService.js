import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Fonction pour effectuer la connexion de l'utilisateur
export const loginUser = createAsyncThunk(
  // Identifie l'action. Utilisé pour suivre l'état de cette action dans l'application
  'auth/loginUser',
  // Fonction qui effectue l'appel API pour la connexion.
  // userCredentials contient l'email et le mot de passe de l'utilisateur.
  async (userCredentials, thunkAPI) => {
    try {
      // Tente de se connecter en envoyant une requête POST avec axios.
      const response = await axios.post('http://localhost:3001/api/v1/user/login', userCredentials);
      return response.data;
      
    } catch (error) {
      // Si l'appel échoue, renvoie l'erreur capturée.
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Fonction pour récupérer le profil de l'utilisateur
export const fetchUserProfile = createAsyncThunk(
  // Identifie l'action de récupération du profil.
  'user/fetchUserProfile',
  // Fonction qui effectue l'appel API pour récupérer le profil.
  async (_, { getState, rejectWithValue }) => {
    // Obtient le token de l'état global pour l'authentification.
    const token = getState().user.user.body.token;
    try {
      // Tente de récupérer le profil en envoyant une requête POST avec axios.
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
       // En-têtes nécessaires pour l'authentification. 
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });
      return response.data;
      
      // Si l'appel échoue, renvoie l'erreur capturée.
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fonction de mise à jour du profil de l'utilisateur
export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  // Fonction qui effectue l'appel API pour mettre à jour le profil.
  async (userData, { getState, rejectWithValue }) => {
    // Obtient le token de l'état global pour l'authentification.
    const token = getState().user.user.body.token; 
    try {
      // Tente de mettre à jour le profil en envoyant une requête PUT avec axios.
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', userData, {
        // En-têtes nécessaires pour l'authentification.
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Regroupe les fonctions exportées pour un accès plus facile.
export const authService = {
  loginUser,
  fetchUserProfile,
};