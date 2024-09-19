import { createSlice } from '@reduxjs/toolkit';
import {
    register,
    logIn,
    logOut,
    oAuthLogin,
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
                state.user = action.payload.user;
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
                state.user.photo = action.payload.data.photo;
            })
            .addCase(updateAvatar.rejected, handleRejected)

            .addCase(updateUserData.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.data;
            })
            .addCase(updateUserData.rejected, handleRejected)

            .addCase(refreshUser.pending, (state, action) => {
                // state.isRefreshing = true;
                state.isLoading = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.isRefreshing = false;
                state.user = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(refreshUser.rejected, handleRejected)

            .addCase(updateDailyNorma.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(updateDailyNorma.fulfilled, (state, action) => {
                state.isLoading = false;
                if (state.user) {
                    state.user.dailyNorma = action.payload.data.dailyNorma;
                }
                // state.user.dailyNorma = action.payload;
                // console.log(action.payload);
            })
        
            .addCase(updateDailyNorma.rejected, handleRejected)
        
            .addCase(oAuthLogin.pending, (state) => {
        state.isRefreshing = true;
    })
        .addCase(oAuthLogin.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
    })
        .addCase(oAuthLogin.rejected, (state) => {
        state.isRefreshing = false;
    })
    },
});

// const persistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token'],
// };

// export const persistedContactsReducer = persistReducer(
//     persistConfig,
//     authSlice.reducer,
// );

// Use named export to match import statement
export default authSlice.reducer;