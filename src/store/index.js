import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./authSlice";
import authSlice from "./counterSlice";
import postsSlice from "./postSlice";
import cartReducer from "./cartSlice"

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice, posts: postsSlice, cart: cartReducer },
});

export default store;
