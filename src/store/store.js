import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './locationSlice';
import menuReducer from './menuSlice';
import temperatureReducer from './temperatureSlice';

const store = configureStore({
  reducer: {
    locations : locationsReducer,
    menu : menuReducer,
    temperature : temperatureReducer,
  },
});

export default store;