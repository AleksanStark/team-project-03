import authSlice from './auth/auth.slice'; // Corrected import
import { configureStore } from '@reduxjs/toolkit';
import waterReducer from './water/slice.js';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
const persistedAuthConfig = persistReducer(persistConfig, authSlice);

export const store = configureStore({
    reducer: {
        auth: persistedAuthConfig,
        water: waterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
export const persistor = persistStore(store);
