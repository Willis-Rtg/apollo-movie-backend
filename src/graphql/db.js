import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/";

export const getMovie = async (id) => {
  let REQUEST_URL = API_URL + "movie_details.json?";
  if (id) REQUEST_URL += `movie_id=${id}`;

  const movie = await fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movie);

  return movie;
};

export const getMovies = async (limit, rating) => {
  let REQUEST_URL = API_URL + "list_movies.json?";
  if (limit > 0) REQUEST_URL += `limit=${limit}`;
  if (rating > 0) REQUEST_URL += `&minimum_rating=${rating}`;

  const movies = await fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);

  return movies;
};

export const getSuggestions = async (id) => {
  let REQUEST_URL = API_URL + "movie_suggestions.json?";
  if (id) REQUEST_URL += `movie_id=${id}`;

  const suggestions = await fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);

  return suggestions;
};
