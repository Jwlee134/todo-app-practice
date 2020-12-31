import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./store/movie";
import { RootState } from "./store/reducer";

const Movie = () => {
  const { movies, loading } = useSelector((state: RootState) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <h2>Movies</h2>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movie;
