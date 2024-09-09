import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://watertracker-db.onrender.com";

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      await axios.post(`/auth/register`, credentials);
      const { data } = await axios.post(`/auth/login`, credentials);
      setAuthHeader(data.data.accessToken);

      toast.success("Registration successful");

      return data.data;
    } catch (error) {
      toast.error(error.message || "Registration failed", error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/auth/login`, credentials);
      setAuthHeader(data.data.accessToken);

      toast.success("Login successful");

      return data.data;
    } catch (error) {
      toast.error(error.message || "Authorization failed");

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();

    toast.success("You are logged out");
  } catch (error) {
    toast.error(error.message || "Something went wrong");

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get("/user/info");

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "user/info/photo",
  async (formData, thunkAPI) => {
    console.log("Photo", formData);

    try {
      const { data } = await axios.patch("/user/info/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },

  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get("/user/info");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Method to Update User
export const updateUserData = createAsyncThunk(
  "/user/info/update",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.patch("/user/info/update", body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    } catch (error) {
      toast.error("Request error");
      return thunkAPI.rejectWithValue(error.message);
    }
  },

  "/user/info/update",
  async (body, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.patch("/user/info/update", body);
      return data.data;
    } catch (error) {
      toast.error("Request error");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateDailyNorma = createAsyncThunk(
  "/water-rate",
  async (newDailyNorma, thunkAPI) => {
    try {
      const { data } = await axios.patch("/water-rate", {
        waterRate: newDailyNorma,
      });
      return data.waterRate;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendResetEmail = createAsyncThunk(
  "auth/sendResetEmail",
  async (email, thunkAPI) => {
    try {
      const response = await axios.post("/auth/request-reset-email", { email });
      return response.data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPwd = createAsyncThunk(
  "auth/reset-password",
  async ({ password, token }, thunkAPI) => {
    try {
      const res = await axios.post("/auth/reset-password", { password, token });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updatePassword = createAsyncThunk(
  "auth/reset-password",
  async ({ password, token }, thunkAPI) => {
    try {
      const { data } = await axios.post("auth/reset-password", {
        password,
        token,
      });
      toast.success("Password updated successfully!");
      console.log(data);

      return data.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Failed to update password. Please try again.";
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
