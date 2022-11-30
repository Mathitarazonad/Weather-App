import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './locationSlice';
import menuReducer from './menuSlice';
import temperatureReducer from './temperatureSlice';
import {weatherAPI} from '../apis/weatherApi';

const store = configureStore({
  reducer: {
    locations : locationsReducer,
    menu : menuReducer,
    temperature : temperatureReducer,
    weatherAPI : weatherAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherAPI.middleware),
});

export default store;