import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showDrawer: false,
  showNav: false,
  isLoading: false,
};

export const ui = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setShowDrawer: (state, action) => {
      state.showDrawer = action.payload;
    },
    setShowNav: (state, action) => {
      state.showNav = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
