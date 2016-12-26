function UserService($http){

  this.httpGetUser = function(id){
    return $http.get('/users/'+ id)
  }
}
angular
    .module('app')
    .service('UserService', UserService);
