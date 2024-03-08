
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 
import { persistStore, persistReducer } from 'redux-persist';
import userAuthSlice from "../feature/user.slice"; 
import userProfileSlice from "../feature/user.profile.slice"; 

// Configuration de Redux Persist pour permettre la persistance de l'état Redux
const persistConfig = {
  key: 'root', // Le niveau à partir duquel l'état est persisté
  storage, // Définit où l'état persisté est stocké (ici, dans le localStorage)
};

// Combinaison des reducers
// Les reducers spécifient comment l'état de l'application change en réponse aux actions
const rootReducer = combineReducers({
  user: userAuthSlice, // Reducer pour l'authentification des utilisateurs
  userProfile: userProfileSlice, // Reducer pour les informations de profil des utilisateurs
});

// Création du reducer persisté
// Enveloppe notre reducer global avec la logique de persistance
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store Redux
// Le store est le conteneur global de l'état de l'application
export const store = configureStore({
  reducer: persistedReducer, // Utilise le reducer persisté pour le store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST','persist/PURGE'], // Ignore ces actions 
      },
    }),
});

// Création du persistor pour le store

export const persistor = persistStore(store);
