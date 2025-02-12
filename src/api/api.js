import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const end_point_trending = '/trending/movie/day';
const end_point_search = '/search/movie?query=';
const end_point_movieDetails = '/movie/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDliMjFlOTU2Zjk4NzdmNmY1MGUyZjlmMjUyZDU0OCIsInN1YiI6IjY2NDI0MmQzZGFkOGY2ZjU2ODIxMTFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5l9ulotITl12SssLalNYDErso240bG_4O36uvhBgxM',
  },
};

export const fetchTrendingMovies = async () => {
  const responce = await axios.get(`${BASE_URL}${end_point_trending}`, options);
  return responce;
};

export const fetchSearchMovie = async searchValue => {
  const responce = await axios.get(
    `${BASE_URL}${end_point_search}${searchValue}`,
    options
  );
  return responce;
};

export const fetchMovieDetails = async movieId => {
  const responce = await axios.get(
    `${BASE_URL}${end_point_movieDetails}${movieId}`,
    options
  );
  return responce;
};

export const fetchMovieCast = async movieId => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    options
  );
  return responce;
};

export const fetchMovieReviews = async movieId => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    options
  );
  return responce;
};
