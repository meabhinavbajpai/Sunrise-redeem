// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null, // Initial state with no user details
};

const voucherSlice = createSlice({
  name: 'voucher',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
   resetData: () => initialState,
  },
});

export const { setData ,resetData} = voucherSlice.actions;
export default voucherSlice.reducer;
