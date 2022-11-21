import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedCity : '',
  currentCity : 'New York'
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
    }
  }
});

export default locationSlice.reducer;
export const {setSearchedCity, setCurrentCity} = locationSlice.actions;