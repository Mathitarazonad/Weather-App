import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedCity : '',
  current : {
    city : 'New York',
    country : 'us',
    coords: {
      latitude : 40.7127281,
      longitude : -74.0060152
    },
    timezone: 'America/New_York',
    time: {
      hour: '',
      day: '',
      dayName: '',
      month: '',
    }
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
      state.current.coords.longitude = longitude;
    },
    setCurrentCoords: (state,action) => {
      const {latitude, longitude} = action.payload
      state.current.coords.latitude = latitude,
      state.current.coords.longitude = longitude
    },
    setCurrentTime: (state, action) => {
      const {hour, day, dayName, month} = action.payload;
      state.current.time.day = day;
      state.current.time.dayName = dayName;
      state.current.time.month = month;
      state.current.time.hour = hour;
    }
  }
});

export default locationSlice.reducer;
export const {setSearchedCity, setCurrentLocationInfo, setCurrentCoords, setCurrentTime} = locationSlice.actions;