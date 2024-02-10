// mobileNumberSlice.js
import { createSlice } from '@reduxjs/toolkit';

const congratulationSlice = createSlice({
  name: 'congratulation',
  initialState: '', // Initial state should be an empty string or null
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
   
  },
});

export const { setData } = congratulationSlice.actions;
export default congratulationSlice.reducer;
