import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todayWeather : {
    temperatures : {
      currentTemperature : 10,
      min : 7,
      max : 14
    },
    weatherCode : {
      currentWeatherCode : 3
    }
  }
}

const weatherSlice = createSlice({
  name : 'weather',
  initialState,
  reducers : {
    setCurrentWeather : (state, action) => {
      const {min, max, weatherCode, currentTemp} = action.payload;
      state.todayWeather.temperatures = {min, max};
      state.todayWeather.temperatures.currentTemperature = currentTemp;
      state.todayWeather.weatherCode = weatherCode;
    }
  }
})

export default weatherSlice.reducer;
export const { setCurrentWeather } = weatherSlice.actions;