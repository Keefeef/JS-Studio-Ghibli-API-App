const MovieView = require('./movie_view.js');
const PubSub = require('../helpers/pub_sub.js');

const MovieListView = function(container) {
  this.container = container;
};

MovieListView.prototype.bindEvents= function () {
  PubSub.subscribe('Ghibli:film-data-ready', (evt) => {
  this.renderMovieDetails(evt.detail);
  console.log(evt);
});
};

MovieListView.prototype.renderMovieDetails = function (movies) {
  movies.forEach((movie) => {
    const movieItem = this.createMovieListItem(movie);
    this.container.appendChild(movieItem);
  });
};

MovieListView.prototype.createMovieListItem = function (movie) {
  const movieDetailView = new MovieView();
  const movieDetail = movieDetailView.createMovieDetails(movie);
  return movieDetail;
};

module.exports = MovieListView;
