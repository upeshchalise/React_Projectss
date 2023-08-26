import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: MovieReducer,
  },
});
