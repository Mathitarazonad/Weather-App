import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './locationSlice';

export const store = configureStore({
  reducer: {
    locations : locationsReducer
  },
});