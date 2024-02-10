// reducers/index.js
import { combineReducers } from 'redux';
import mobileNumberSlice from './mobileNumberSlice';
import userSlice from './userSlice';
import voucherSlice from './voucherSlice';
import singleProductSlice from './singleProductSlice';
import congratulationSlice from './congratulationSlice';

const rootReducer = combineReducers({
    user: userSlice,
    vouchers:voucherSlice,
    productDetail:singleProductSlice,
    finalDetail:congratulationSlice   
    // Add other reducers here
  });

export default rootReducer;
