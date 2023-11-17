import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./authSlice";
import authSlice from "./counterSlice";
import postsSlice from "./postSlice";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice, posts: postsSlice },
});

export default store;
