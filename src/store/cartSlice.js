import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      //   state.cartItems = [...state.cartItems, action.payload];
      state.cartItems.push({ ...action.payload, quantity: 1 });
      state.total += action.payload.price;
    },
    removeProduct: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.total -= action.payload.price;
    },
    increase: (state, action) => {
      const findItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      findItem.quantity += 1;
      state.total += findItem.price;
    },
    decrease: (state, action) => {
      const findItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      findItem.quantity -= 1;
      if (findItem.quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
      state.total -= findItem.price;
    },
  },
});

export const { addProduct, removeProduct, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
