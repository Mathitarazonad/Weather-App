import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedCity : '',
  isSearchingCities : false,
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
  },
  citiesOptions : [
  ],
  searchedCitiesOptions : [
    {
      city : 'New York',
      stateName: 'New York',
      country : 'us',
      latitude : 40.7127281,
      longitude : -74.0060152,
      timezone: 'America/New_York',
    },
  ]
}

const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers : {
    setSearchedCity : (state, action) => {
      state.searchedCity = action.payload;
    },
    setIfSearchingCities : (state, action) => {
      state.isSearchingCities = action.payload;
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
    },
    setCitiesOptions : (state, action) => {
      state.citiesOptions = action.payload;
    },
    setSearchedCitiesOptions : (state, action) => {
      const {city, country, latitude, longitude, timezone, stateName} = action.payload;
      const newCity = {city, country, latitude, longitude, timezone, stateName};
      state.searchedCitiesOptions.unshift(newCity);
    }
  }
});

export default locationSlice.reducer;
export const {setSearchedCity, setIfSearchingCities, setCurrentLocationInfo, setCurrentCoords, setCurrentTime, setCitiesOptions, setSearchedCitiesOptions} = locationSlice.actions;