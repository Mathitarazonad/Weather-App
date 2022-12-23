import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './locationSlice';
import menuReducer from './menuSlice';
import temperatureReducer from './temperatureSlice';
import weatherReducer from './weatherSlice';
import themeReducer from './themeSlice';
import {weatherAPI} from '../apis/weatherApi';
import { locationsAPI } from '../apis/locationsApi';

const store = configureStore({
  reducer: {
    locations : locationsReducer,
    menu : menuReducer,
    temperature : temperatureReducer,
    weather : weatherReducer,
    theme : themeReducer,
    weatherAPI : weatherAPI.reducer,
    locationsAPI : locationsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherAPI.middleware, locationsAPI.middleware),
});

export default store;