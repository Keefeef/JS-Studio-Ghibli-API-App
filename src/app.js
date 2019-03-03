const Ghibli = require('./models/ghibli.js');
const MovieListView = require('./views/movie_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const movieListContainer = document.querySelector('#films-list')
  const movieListView = new MovieListView(movieListContainer);
  movieListView.bindEvents();

  const movies = new Ghibli();
  movies.getData();
});
