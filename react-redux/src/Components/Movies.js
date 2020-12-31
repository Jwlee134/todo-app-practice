import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../modules/movies";

const Movies = () => {
  const { data, error, loading } = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <h2>loading...</h2>;
  if (error) return "Error...";

  return (
    <>
      <h2>Movies</h2>
      <ul>
        {data.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
