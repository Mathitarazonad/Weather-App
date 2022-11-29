import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedCity : '',
  currentCity : 'New York',
  currentCountry : 'US',
  currentCoords : {
    lat : 40.7127281,
    lon: -74.0060152
  }
}

const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers : {
    setSearchedCity : (state, action) => {
      state.searchedCity = action.payload;
    },
    setCurrentCity : (state, action) => {
      state.currentCity = action.payload;
    },
    setCurrentCountry : (state, action) => {
      state.currentCountry = action.payload;
    },
    setCurrentCoords : (state, action) => {
      [state.currentCoords.lat, state.currentCoords.lon] = action.payload;
    }
  }
});

export default locationSlice.reducer;
export const {setSearchedCity, setCurrentCity, setCurrentCountry, setCurrentCoords} = locationSlice.actions;