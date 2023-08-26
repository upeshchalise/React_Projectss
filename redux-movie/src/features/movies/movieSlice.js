import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieapi from "../../apis/MovieApi";
import { APIKEY } from "../../apis/MovieApiKey";

export const movieFetchAsync = createAsyncThunk(
  "movies/movieFetchAsync",
  async (search) => {
    const response = await movieapi
      .get(`?apikey=${APIKEY}&s=${search}&type=movie`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);
export const seriesFetchAsync = createAsyncThunk(
  "movies/seriesFetchAsync",
  async (search) => {
    const response = await movieapi
      .get(`?apikey=${APIKEY}&s=${search}&type=series`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);
export const fetchSeriesOrMovieDetail = createAsyncThunk(
  "movies/fetchSeriesOrMovieDetail",
  async (id) => {
    const response = await movieapi
      .get(`?apikey=${APIKEY}&i=${id}&Plot=full`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieorShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieorShow = {};
    },
  },

  extraReducers: {
    [movieFetchAsync.pending]: () => {
      console.log(`pending`);
    },
    [movieFetchAsync.fulfilled]: (state, { payload }) => {
      console.log(`fetched successfully`);
      return { ...state, movies: payload };
    },
    [movieFetchAsync.rejected]: () => {
      console.log(`Rejected!!`);
    },
    [seriesFetchAsync.fulfilled]: (state, { payload }) => {
      console.log(`fetched successfully`);
      return { ...state, shows: payload };
    },
    [fetchSeriesOrMovieDetail.fulfilled]: (state, { payload }) => {
      console.log(`fetched successfully`);
      return { ...state, selectMovieorShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getShowOrMovieDetail = (state) => state.movies.selectMovieorShow;
export default movieSlice.reducer;
