import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// }

// export const cart = createSlice({
//   name: "cart",
//   initialState: initialState,
//   reducers: {
//     addItem: (state, action) => {
//       const { itemId } = action.payload;
//       state.items.push(itemId);
//     },
//   },
// });

export const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const productInCart = state.items.find((item) => item.id === product.id);

      if (productInCart) {
        productInCart.cartQuantity += 1;
      } else {
        state.items.push({ ...product, cartQuantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct && existingProduct.cartQuantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else if (existingProduct) {
        existingProduct.cartQuantity -= 1;
      }
    },
  },
});
