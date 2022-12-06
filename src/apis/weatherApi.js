import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherAPI = createApi({
  reducerPath : 'weatherAPI',
  baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:8000'}),
  endpoints : (builder) => ({
    getTodayWeather : builder.query({
      query : ({latitude, longitude, isCelsius, timezone}) => `/today?latitude=${latitude}&longitude=${longitude}&temperature=${isCelsius ? 'celsius' : 'fahrenheit'}&timezone=${timezone}`
    }),
    getHourlyWeather : builder.query({
      query : ({latitude, longitude}) => `/hourly?latitude${latitude}&longitude=${longitude}`
    }),
  })
})

export const { useGetTodayWeatherQuery, useGetHourlyWeatherQuery } = weatherAPI;