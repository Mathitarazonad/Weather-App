import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherAPI = createApi({
  reducerPath : 'weatherAPI',
  baseQuery : fetchBaseQuery({baseUrl : 'https://weather-app-fikm.onrender.com'}),
  endpoints : (builder) => ({
    getTodayWeather : builder.query({
      query : ({latitude, longitude, isCelsius, timezone}) => `/today?latitude=${latitude}&longitude=${longitude}&temperature=${isCelsius ? 'celsius' : 'fahrenheit'}&timezone=${timezone}`
    }),
    getHourlyWeather : builder.query({
      query : ({latitude, longitude, timezone, isCelsius}) => `/hourly?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&temperature=${isCelsius ? 'celsius' : 'fahrenheit'}`
    }),
    getTodaysDetails : builder.query({
      query : ({latitude, longitude, timezone, isCelsius}) => `/todaysDetails?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&temperature=${isCelsius ? 'celsius' : 'fahrenheit'}`
    }),
  })
})

export const { useGetTodayWeatherQuery, useGetHourlyWeatherQuery, useGetTodaysDetailsQuery } = weatherAPI;