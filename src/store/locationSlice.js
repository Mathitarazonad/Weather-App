import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedCity : '',
  current : {
    city : 'New York',
    country : 'us',
    coords: {
      latitude : 40.710335,
      longitude : -73.99307
    },
    timezone: 'America/New_York'
 }
}

const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers : {
    setSearchedCity : (state, action) => {
      state.searchedCity = action.payload;
    },
    setCurrentLocationInfo : (state, action) => {
      const {city, country, latitude, longitude, timezone} = action.payload;
      state.current.city = city;
      state.current.country = country;
      state.current.timezone = timezone;
      state.current.coords.latitude = latitude;
      state.current.coords.longitude = longitude
    },
    setCurrentCoords: (state,action) => {
      const {latitude, longitude} = action.payload
      state.current.coords.latitude = latitude,
      state.current.coords.longitude = longitude
    }
  }
});

export default locationSlice.reducer;
export const {setSearchedCity, setCurrentLocationInfo, setCurrentCoords} = locationSlice.actions;