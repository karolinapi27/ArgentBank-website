import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from '../services/ApiService';

// Création d'un slice pour l'authentification utilisateur avec createSlice.
export const userAuthSlice = createSlice({
  // Nom du slice
  name: "user",
  // Etat initial du slice.
  initialState: {
    loading: false, 
    user: null,     
    error: null,   
  },
  // Les reducers pour gérer les actions internes au slice.
  reducers: {  
    // Action de déconnexion qui réinitialise l'état à ses valeurs initiales.
    logout: (state) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    },
  },
  // Les extra reducers pour gérer les états de l'action asynnchrone 'loginUser'
  extraReducers:(builder)=>{
    builder
   
    .addCase(loginUser.pending,(state)=>{
      state.loading = true;
      state.user = null;
      state.error = null;
    })
   
    .addCase(loginUser.fulfilled,(state, action)=>{
      state.loading = false;
      state.user = action.payload; // Met à jour l'état avec les données de l'utilisateur connecté.
      state.error = null;
    })
    // Gère l'état rejected de l'action loginUser, indiquant une connexion échouée.
    .addCase(loginUser.rejected,(state, action)=>{
      state.loading = false;
      state.user = null;
      // Personnalise le message d'erreur basé sur le type d'erreur retourné.
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

// Exporte l'action de déconnexion pour pouvoir l'utiliser dans les composants.
export const { logout } = userAuthSlice.actions;
// Exporte le reducer du slice pour l'intégrer dans le store 
export default userAuthSlice.reducer;
