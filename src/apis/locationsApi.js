import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const locationsAPI = createApi({
  reducerPath : 'locationsAPI',
  baseQuery : fetchBaseQuery({baseUrl: 'http://localhost:8000'}),
  endpoints : builder => ({
    getLocationByCity : builder.query({
      query : (city) => `/city?city=${city}`
    }),
    getLocationByCoords : builder.query({
      query : ({latitude, longitude}) => `/coords?latitude=${latitude}&longitude=${longitude}`
    })
  })
});

export const { useGetLocationByCityQuery, useGetCurrentLocationQuery, useGetLocationByCoordsQuery } = locationsAPI;