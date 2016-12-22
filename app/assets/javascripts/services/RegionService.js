function RegionService($http){

  this.httpGetRange = function(){
    return $http.get('/range');
  };
}
angular
    .module('app')
    .service('RegionService', RegionService);
