import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://watertracker-db.onrender.com';

export const addWaterRecord = createAsyncThunk(
    'water/add', // Updated action type to avoid conflict
    async ({ volume, date }, thunkAPI) => {
        try {
            const { data } = await axios.post('/water', { volume, date });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const getMonthlyRecord = createAsyncThunk(
    'water/getMonthlyInfo',
    async (userData, thunkAPI) => {
        const date = new Date(userData);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Fixed typo
        const END_POINT = `/water/monthly/${year}-${month}-01`; // Fixed typo
        try {
            const response = await axios.get(END_POINT);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || 'Failed to fetch water record',
            );
        }
    },
);

export const updateWaterRecord = createAsyncThunk(
    'water/update', // Updated action type to avoid conflict
    async ({ recordId, volume, date }, thunkAPI) => {
        try {
            const response = await axios.patch(`/water/${recordId}`, {
                volume,
                date,
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || 'Failed to update water record',
            );
        }
    },
);

export const deleteWaterRecord = createAsyncThunk(
    'water/delete',
    async ({ recordId }, thunkAPI) => {
        try {
            const response = await axios.delete(`/water/${recordId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || 'Failed to delete a water record',
            );
        }
    },
);

export const getDailyRecord = createAsyncThunk(
    'water/getDaily', // Updated action type to avoid conflict

    async (_, thunkAPI) => {
        let today = new Date();
        let isoDate = today.toISOString().slice(0, 10);
        console.log(isoDate);

        try {
            const response = await axios.get(`/water/daily/${isoDate}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);

//===========видалити
export const getWaterRecord = createAsyncThunk(
    'water/getDaily', // Updated action type to avoid conflict

    async (userData, thunkAPI) => {
        const date = new Date(userData);
        const year = date.getFullYear();
        const month = date.getMonth().toString().padStart(2, '0'); // Fixed typo
        const day = date.getDay();
        const END_POINT = `/water/daily/${year}-${month}-${day}`; // Fixed typo

        try {
            const response = await axios.get(END_POINT);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);
