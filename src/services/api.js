const API_KEY = "14545dc7";
const BASE_URL = "https://www.omdbapi.com/";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=avengers`);
  const data = await response.json();
  return data.Search || [];
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.Search || [];
};
