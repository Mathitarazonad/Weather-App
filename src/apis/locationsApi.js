import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const locationsAPI = createApi({
  reducerPath : 'locationsAPI',
  baseQuery : fetchBaseQuery({baseUrl: 'http://localhost:8000'}),
  endpoints : builder => ({
    getCurrentLocation : builder.query({
      query : ({city, country}) => `/coords?city=${city}&country=${country}`
    })
  })
});

export const { useGetCurrentLocationQuery } = locationsAPI;