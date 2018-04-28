function RegionService($http){

  this.httpGetRegions = function(){
    return $http.get('/regions')
  }
}
angular
    .module('app')
    .service('RegionService', RegionService);
