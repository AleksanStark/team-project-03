export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRegistered = state => state.auth.isRegistered;

export const selectIsLoading = state => state.auth.isLoading;

export const selectUser = state => state.auth.user;

export const selectToken = state => state.auth.token;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const dailyNormaSelector = state => state.auth.user.waterRate;