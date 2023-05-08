export default class MovieList {
  constructor(movies) {
    this.movies = movies;
  }

  render() {
    let html = `
      <div class="movie-list">
    `;
    this.movies.forEach((movie) => {
      html += `
      <div class="movie">
      <img class="movie-poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <div class="movie-details">
        <h2 class="movie-title">${movie.title}</h2>
        <p class="movie-overview">${movie.overview}</p>
      </div>
    </div>
      `;
    });
    html += `
      </div>
    `;
    return html;
  }
}
