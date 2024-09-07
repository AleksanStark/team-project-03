import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addWaterRecord = createAsyncThunk(
  'water/add', // Updated action type to avoid conflict
  async (record, thunkAPI) => {
    try {
      const { data } = await axios.post('/water', record);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMonthlyRecord = createAsyncThunk(
  'water/getMonthlyInfo',
  async (userData, thunkAPI) => {
    const date = new Date(userData);
    const year = date.getFullYear();
    const month = date.getMonth().toString().padStart(2, '0'); // Fixed typo
    const END_POINT = `/water/monthly/${year}-${month}-01`; // Fixed typo

    try {
      const response = await axios.get(END_POINT);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getWaterRecord = createAsyncThunk(
  'water/get', // Updated action type to avoid conflict

  async (recordId, thunkAPI) => {
    try {
      const response = await axios.get(`/water/${recordId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'Failed to fetch water record'
      );
    }
  }
);

export const updateWaterRecord = createAsyncThunk(
  'water/update', // Updated action type to avoid conflict
  async ({ recordId, amount, time }, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/${recordId}`, {
        amount,
        time,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'Failed to update water record'
      );
    }
  }
);
