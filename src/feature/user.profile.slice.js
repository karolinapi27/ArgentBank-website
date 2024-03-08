import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile } from '../services/ApiService';

// Création d'un slice appelé userProfileSlice
export const userProfileSlice = createSlice({
  // Nom du slice
  name: "userProfile",
  // État initial du slice
  initialState: {
    profile: null, 
    token: null, 
    loading: false, 
    error: null, 
  },
  // Les reducers spécifient comment l'état doit changer en réponse à une action
  reducers: {
    // Reducer pour effacer les informations de profil de l'utilisateur
    clearUserProfile: (state) => {
      state.profile = null;
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
  // extraReducers permet de gérer les actions supplémentaires,les actions asynchrones gérées par createAsyncThunk 
  extraReducers: (builder) => {
    builder
      // Gestion de l'état pendant l'exécution de la requête fetchUserProfile.
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true; // Commence le chargement.
      })
      // Gestion de l'état lorsque fetchUserProfile est résolue avec succès.
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false; // Arrête le chargement.
        state.profile = action.payload.body; // Met à jour le profil avec les données reçues.
      })
      // Gestion de l'état lorsque fetchUserProfile échoue.
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false; // Arrête le chargement.
        state.error = action.error.message; // Stocke le message d'erreur.
      })   
  },
});

// Exportation des actions générées par le slice pour les utiliser ailleurs dans l'application.
export const { clearUserProfile } = userProfileSlice.actions;
// Exportation du reducer associé au slice pour l'intégrer au store Redux.
export default userProfileSlice.reducer;
