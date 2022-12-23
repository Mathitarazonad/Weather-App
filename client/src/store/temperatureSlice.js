import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCelsius: true,
};

const temperatureSlice = createSlice({
  name: 'temperature',
  initialState,
  reducers: {
    setIfCelsius: (state) => {
      state.isCelsius = !state.isCelsius;
    },
  },
});

export default temperatureSlice.reducer;
export const { setIfCelsius } = temperatureSlice.actions;
