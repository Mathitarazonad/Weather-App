import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuIsOpen : false,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers : {
    setIfMenuOpen : state => {
      state.menuIsOpen = !state.menuIsOpen;
    }
  }
})

export default menuSlice.reducer;
export const { setIfMenuOpen } = menuSlice.actions;