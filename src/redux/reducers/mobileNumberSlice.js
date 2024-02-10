// mobileNumberSlice.js
import { createSlice } from '@reduxjs/toolkit';

const mobileNumberSlice = createSlice({
  name: 'mobileNumber',
  initialState: '', // Initial state should be an empty string or null
  reducers: {
    setMobileNumber: (state, action) => {
      return action.payload;
    },
    clearMobileNumber: (state) => {
      return ''; // Clear the mobile number
    },
  },
});

export const { setMobileNumber, clearMobileNumber } = mobileNumberSlice.actions;
export default mobileNumberSlice.reducer;
