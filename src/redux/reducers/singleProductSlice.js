// mobileNumberSlice.js
import { createSlice } from '@reduxjs/toolkit';

const singleProductSlice = createSlice({
  name: 'single',
  initialState: '', // Initial state should be an empty string or null
  reducers: {
    setProduct: (state, action) => {
      return action.payload;
    },
    resetProductData: () => initialState,
   
  },
});

export const { setProduct,resetProductData } = singleProductSlice.actions;
export default singleProductSlice.reducer;
