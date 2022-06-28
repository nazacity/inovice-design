import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sideNavBarOpen: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    handleSideBar(state, action) {
      state.sideNavBarOpen = action.payload;
    },
  },
});

export const { handleSideBar } = layoutSlice.actions;

export default layoutSlice.reducer;
