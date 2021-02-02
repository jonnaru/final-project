import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLoginDrawer: false,
  showCartDrawer: false,
  showNav: false,
  isLoading: false,
};

export const ui = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setShowLoginDrawer: (state, action) => {
      state.showLoginDrawer = action.payload;
    },
    setShowCartDrawer: (state, action) => {
      state.showCartDrawer = action.payload;
    },
    setShowNav: (state, action) => {
      state.showNav = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
