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
  },
  hourlyWeather : [],
  hourlyPageSelected : 0,
  dailyWeather : [],
  dailyWeatherMode : true,
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
    },
    setHourlyWeather : (state, action) => {
      state.hourlyWeather = action.payload;
    },
    setCurrentHourlyPageSelected : (state, action) => {
      state.hourlyPageSelected = action.payload;
    },
    setDailyWeather : (state, action) => {
      state.dailyWeather = action.payload;
    },
    setDailyWeatherMode : (state, action) => {
      state.dailyWeatherMode = action.payload
    }
  }
})

export default weatherSlice.reducer;
export const { setCurrentWeather, setHourlyWeather, setCurrentHourlyPageSelected, setDailyWeather, setDailyWeatherMode } = weatherSlice.actions;