import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesData } from "../api";

const initialState = {
  movies: {
    data: [],
    error: null,
    loading: false,
  },
};

export const fetchMovies = createAsyncThunk(
  `movies/fetchMovies`,
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await getMoviesData();
      return movies;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      //console.log(action);
      state.movies.loading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      //console.log(action);
      state.movies.loading = false;
      state.movies.data.push(...action.payload);
    },
    [fetchMovies.rejected]: (state, action) => {
      //console.log(action);
      state.movies.error = action.payload;
      state.movies.loading = false;
    },
  },
});

export default movieSlice.reducer;
