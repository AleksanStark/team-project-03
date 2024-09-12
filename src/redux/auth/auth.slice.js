import { createSlice } from '@reduxjs/toolkit';
import {
    register,
    logIn,
    logOut,
    refreshUser,
    updateAvatar,
    updateDailyNorma,
    updateUserData,
    getUserData,
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
            .addCase(getUserData.pending, state => {
                state.isLoading = true;
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.data;
            })
            .addCase(getUserData.rejected, handleRejected)
            .addCase(register.pending, state => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.accessToken;
                state.isRegistered = true;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, handleRejected)

            .addCase(logIn.pending, state => {
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.accessToken;
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
                state.user.photo = action.payload.photo;
            })
            .addCase(updateAvatar.rejected, handleRejected)

            .addCase(updateUserData.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
            })
            .addCase(updateUserData.rejected, handleRejected)

            .addCase(refreshUser.pending, (state, action) => {
                state.isRefreshing = true;
                state.isLoading = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isRefreshing = false;
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

// Use named export to match import statement
export default authSlice.reducer;
