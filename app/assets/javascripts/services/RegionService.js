function RegionService($http){

  this.httpGetRegions = function(){
    return $http.get('/region');
  };
}
angular
    .module('app')
    .service('RegionService', RegionService);
