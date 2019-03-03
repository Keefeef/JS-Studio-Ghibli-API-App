const MovieView = function() {};

MovieView.prototype.createMovieDetails = function (movie) {
  const movieDetail = document.createElement('div');
  movieDetail.classList.add('movie-detail');

  const title = document.createElement('h3');
  title.textContent = movie.title;
  movieDetail.appendChild(title);

  const detailsList = document.createElement('ul');
  const description = this.createDetailListItem('Description', movie.description);
  detailsList.appendChild(description);

  const director = this.createDetailListItem('Director', movie.director);
  detailsList.appendChild(director);

  const producer = this.createDetailListItem('Producer', movie.producer);
  detailsList.appendChild(producer);

  const release_date = this.createDetailListItem('Release Date', movie.release_date);
  detailsList.appendChild(release_date);

  movieDetail.appendChild(detailsList);
  return movieDetail;
};

MovieView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};















//   this.moviesContainer = container;
//   this.movie = movie;
// };
//
//
//
// MovieView.prototype.createMovieHeading = function () {
//   const title = document.createElement('h2')
//   title.classList.add('film-title');
//   if (!this.movie.title) {
//     title.textContent = 'Misc';
//   } else {
//     title.textContent = this.movie.title;
//   }
//   return title;
// };
//
// MovieView.prototype.createMovieDetails = function () {
//   const movieDetails = document.createElement('ul');
//   movieDetails.classlist.add('details');
//   this.populateList(movieDetails);
//   return movieDetails;
// };
//
// MovieView.prototype.populateList = function (list) {
//   this.movie.details.forEach((movie) => {
//     const movieListItem = document.createElement('li');
//     movieListItem.textContent = `${description}: ${director}: ${release_date}`;
//     return movieListItem;
//   })
//
// }



module.exports = MovieView;
