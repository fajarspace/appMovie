const axios = require("axios");
import MovieList from "./components/MovieList.js";

import "./static/css/app.css";

const appDiv = document.getElementById("app");

const apiKey = "63288fbed2ea65b17d9f1c7d731b981a";
const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

axios
  .get(apiUrl)
  .then((response) => {
    const movies = response.data.results;
    const movieList = new MovieList(movies);
    appDiv.innerHTML = movieList.render();
    document.title = "Popular Movies - My Movie App"; // judul halaman
  })
  .catch((error) => {
    console.log(error);
  });
