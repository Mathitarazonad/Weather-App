import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode : true,
}

const themeSlice = createSlice({
  name : 'theme',
  initialState,
  reducers : {
    setIfDarkMode : state => {
      state.isDarkMode = !state.isDarkMode
    },
  }
  
})

export default themeSlice.reducer;
export const { setIfDarkMode } = themeSlice.actions