const axios = require("axios");

const apiKey = "63288fbed2ea65b17d9f1c7d731b981a";
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", () => {
  axios
    .get(apiUrl)
    .then((response) => {
      const movies = response.data.results;
      const movieList = new MovieList({ movies });
      appDiv.innerHTML = "";
      appDiv.appendChild(movieList.render());
    })
    .catch((error) => {
      console.log(error);
    });
});

searchForm.appendChild(resetButton);
