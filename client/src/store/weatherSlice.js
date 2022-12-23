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
    },
    details : {
      humidity : 0,
      visibility: 0,
      windSpeed : 0,
      windDirection: 0,
      apparentTemperature : 0,
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
    },
    setTodayDetails : (state, action) => {
      const {humidity, visibility, apparentTemperature, windSpeed, windDirection} = action.payload;
      state.todayWeather.details = {
        humidity, visibility, windSpeed, windDirection, apparentTemperature
      }
    }
  }
})

export default weatherSlice.reducer;
export const { setCurrentWeather, setHourlyWeather, setCurrentHourlyPageSelected, setDailyWeather, setDailyWeatherMode, setTodayDetails } = weatherSlice.actions;