const constants = {
  BASE_URL: 'https://api.themoviedb.org/3',
  LANGUAGE: 'en',
  WEATHER_BASE_URL: 'https://api.openweathermap.org/data/2.5/',
  MOVIE_API_KEY: process.env.REACT_APP_MOVIE_API_KEY,
  WEATHER_API_KEY: process.env.REACT_APP_WEATHER_API_KEY,
};
console.log(constants.MOVIE_API_KEY, constants.WEATHER_API_KEY);
export default constants;
