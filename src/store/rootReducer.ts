import { combineReducers } from '@reduxjs/toolkit';
import loadingReducer from './slice/loadingSlice';
import cartReducer from './slice/cartSlice';

export default combineReducers({
	loadingReducer,
	cartReducer
});
