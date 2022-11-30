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
    setCurrentInfo : (state, action) => {
      const {city, country, coords, timezone} = action.payload;
      state.current.coords = {lat: coords[0], lon: coords[1]};
      state.current = {city, country, timezone}
    }
  }
});

export default locationSlice.reducer;
export const {setSearchedCity, setCurrentInfo} = locationSlice.actions;