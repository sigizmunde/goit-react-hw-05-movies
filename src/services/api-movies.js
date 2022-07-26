import axios from 'axios';

const API_KEY = 'ed9b8dd4dcf22d9d746c4e21c6321e97';
const API_BASE_URL = 'https://api.themoviedb.org/3';
export const API_IMG_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = API_BASE_URL;

export async function fetchTrending() {
  const params = { params: { api_key: API_KEY } };
  try {
    const response = await axios.get('/trending/movie/day', params);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchMovie({ movie_id }) {
  const params = { params: { api_key: API_KEY } };
  try {
    const response = await axios.get(`/movie/${movie_id}`, params);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchCast({ movie_id }) {
  const params = { params: { api_key: API_KEY } };
  try {
    const response = await axios.get(`/movie/${movie_id}/credits`, params);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchReviews({ movie_id }) {
  const params = { params: { api_key: API_KEY } };
  try {
    const response = await axios.get(`/movie/${movie_id}/reviews`, params);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function searchMovies({ query }) {
  const params = { params: { api_key: API_KEY, query } };
  try {
    const response = await axios.get(`/search/movie`, params);
    return response;
  } catch (err) {
    console.error(err);
  }
}
