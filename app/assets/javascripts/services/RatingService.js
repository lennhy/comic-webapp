function RatingService($http){

  this.httpGetRatings = function(){
    return $http.get('/ratings')
  }

  // this.httpCreateRating = function(star, comic_id){
  //   return $http.post('/ratings')
  // }

  this.httpCreateRating = function(star, comic_id) {
    data = {
      stars: star,
      comic_id: comic_id
    }
    console.log(data,$http);
    var req = {
     method: 'POST',
     url: '/ratings',
     data: data
    }
    return $http(req);
  }
  function successCallback(data){
    console.log(data)
  }
  function errorCallback(error){
    console.log(error)
  }

}

angular
    .module('app')
    .service('RatingService', RatingService);
