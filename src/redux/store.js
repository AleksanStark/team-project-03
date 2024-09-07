import { persistedContactsReducer } from './auth/auth.slice'; // Corrected import
import { configureStore } from '@reduxjs/toolkit';
import waterReducer from './water/slice.js';
export default configureStore({
  reducer: {
    auth: persistedContactsReducer,
    water: waterReducer,
  },
});
