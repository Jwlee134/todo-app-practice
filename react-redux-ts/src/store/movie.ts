import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMoviesData } from "../api";

interface IMovie {
  title: string;
}

interface IState {
  movies: IMovie[];
  loading: boolean;
  error: null | string;
}

const initialState: IState = {
  movies: [],
  loading: true,
  error: null,
};

export const fetchMovies = createAsyncThunk(
  "fetchMovies",
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
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<IMovie[]>) => {
          state.movies.push(...action.payload);
          state.loading = false;
        }
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default movieSlice.reducer;
