const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Ghibli = function () {
  this.data = null;

};

Ghibli.prototype.getData = function () {

  const requestHelper = new RequestHelper('https://ghibliapi.herokuapp.com/films');
  requestHelper.get().then((data) => {
      this.data = data;
      PubSub.publish('Ghibli:film-data-ready', this.data);
      console.log(data);
    });

}

// Ghibli.prototype.getFilmTitles = function (films) {
// return films
// .map(film => film.title)
// console.log(films);
// };








module.exports = Ghibli;
