import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterRecord,
  getWaterRecord,
  updateWaterRecord,
  getMonthlyRecord,
} from './operations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    dailyRecords: [],
    monthlyRecords: [],
    currentRecord: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addWaterRecord.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addWaterRecord.fulfilled, (state, action) => {
        state.dailyRecords.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addWaterRecord.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })

      .addCase(getMonthlyRecord.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMonthlyRecord.fulfilled, (state, action) => {
        state.monthlyRecords = action.payload.dailyResults;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMonthlyRecord.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })

      .addCase(getWaterRecord.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWaterRecord.fulfilled, (state, action) => {
        state.currentRecord = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getWaterRecord.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error fetching the water record';
      })
      .addCase(updateWaterRecord.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateWaterRecord.fulfilled, (state, action) => {
        state.currentRecord = action.payload;
        const index = state.dailyRecords.findIndex(
          record => record.id === action.payload.id
        );
        if (index !== -1) {
          state.dailyRecords[index] = action.payload;
        }
        state.isLoading = false;
      })
      .addCase(updateWaterRecord.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error updating the water record';
      });
  },
});

export default waterSlice.reducer;
export const selectCurrentRecord = state => state.water.currentRecord;
export const selectIsLoading = state => state.water.isLoading;
export const selectError = state => state.water.error;
