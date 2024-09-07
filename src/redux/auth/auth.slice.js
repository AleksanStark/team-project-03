import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateAvatar,
  updateDailyNorma,
  updateUserData,
} from './operations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRegistered: false,
  isRefreshing: false,
  waterRate: null,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        const {
          accessToken,
          user: { dailyNorma, ...userData },
        } = action.payload;

        state.isLoading = false;
        state.user = userData;
        state.token = accessToken;
        state.waterRate = dailyNorma;
        state.isRegistered = true;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log(action.payload);
        const {
          accessToken,
          user: { dailyNorma, ...userData },
        } = action.payload;
        state.isLoading = false;
        state.user = userData;
        state.token = accessToken;
        state.waterRate = dailyNorma;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, _) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.waterRate = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(updateAvatar.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.avatarURL = action.payload.avatarURL;
      })
      .addCase(updateAvatar.rejected, handleRejected)

      .addCase(updateUserData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateUserData.rejected, handleRejected)

      .addCase(refreshUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, handleRejected)

      .addCase(updateDailyNorma.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateDailyNorma.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.waterRate = action.payload;
      })
      .addCase(updateDailyNorma.rejected, handleRejected);
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

// Use named export to match import statement
export default authSlice.reducer;
