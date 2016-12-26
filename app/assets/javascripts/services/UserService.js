function UserService($http){

  this.httpGetUser = function(id){
    return $http.get('/users/'+ id)
  }

  this.httpGetUsers = function(){
    return $http.get('/users')
  }

}

angular
    .module('app')
    .service('UserService', UserService);
