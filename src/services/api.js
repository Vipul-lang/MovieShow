// const API_KEY = "9f078a02682a8300070f959413743784";
// const BASE_URL = "https://api.themoviedb.org/3";

// export const getPopularMovies = async () => {
//   const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//   const data = await response.json();
//   // console.log(data);
  
//   return data.results;  //It returns only the movie list, not the whole object.
// };

// export const searchMovies = async (query) => {
//   const response = await fetch(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
//       query
//     )}`
//   );
//   const data = await response.json();
//   return data.results;   //It returns only the movie list, not the whole object.
// };