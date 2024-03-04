import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 
import { persistStore, persistReducer } from 'redux-persist';
import userAuthSlice from "../feature/user.slice";
import userProfileSlice from "../feature/user.profile.slice";

// Configuration de Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Combinaison des reducers
const rootReducer = combineReducers({
  user: userAuthSlice,
  userProfile: userProfileSlice,
});

// Création du reducer persisté
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store avec le reducer persisté
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST','persist/PURGE'],
      },
    }),
});

// Création du persistor avec le store
export const persistor = persistStore(store);
