function RatingService($http){

  this.httpGetRatings = function(id){
    return $http.get('/ratings/'+id)
  }

  this.httpGetRating = function(id){
    return $http.get('/ratings/'+id)
  }

  this.httpCreateRating = function(star, comic_id) {
    data = {
      stars: star,
      comic_id: comic_id
    }
    var req = {
     method: 'POST',
     url: '/ratings',
     data: data
    }
    return $http(req);
  }
  function successCallback(data){
    console.log(data);
  }
  function errorCallback(error){
    console.log(error);
  }

}

angular
    .module('app')
    .service('RatingService', RatingService);
