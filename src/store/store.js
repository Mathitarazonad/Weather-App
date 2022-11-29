import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './locationSlice';
import menuReducer from './menuSlice';

const store = configureStore({
  reducer: {
    locations : locationsReducer,
    menu : menuReducer
  },
});

export default store;