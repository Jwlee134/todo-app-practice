import axios from "axios";

const api = axios.create({
  baseURL: "https://yts.mx/api/v2",
});

export const getMoviesData = (page = 1) => {
  return api.get("/list_movies.json", { params: { page, limit: 50 } });
};
