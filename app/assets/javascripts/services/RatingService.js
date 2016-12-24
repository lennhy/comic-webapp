function RatingService($http){

  this.httpGetRatings = function(){
    return $http.get('/ratings')
  }
}
angular
    .module('app')
    .service('RatingService', RatingService);
