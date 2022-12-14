import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuIsOpen : false,
  configurationsAreOpen : false,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers : {
    setIfMenuOpen : state => {
      state.menuIsOpen = !state.menuIsOpen;
    },
    setIfConfigurationState : state => {
      state.configurationsAreOpen = !state.configurationsAreOpen
    }
  }
})

export default menuSlice.reducer;
export const { setIfMenuOpen, setIfConfigurationState } = menuSlice.actions;