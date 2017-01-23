function UserService($http){

  this.httpGetUser = function(id){
    return $http.get('/users/'+ id)
  }

  this.httpGetUsers = function(){
    return $http.get('/users')
  }

  this.httpCreateProfilePic = function(){
    var req = {
      method: 'POST',
      url: '/users/id',
      data: {user: avatar}
    }
    return $http(req)
    .then(successCallback)
    .catch(errorCallback)

    function successCallback(data){
      console.log(data)
    }
    // what to do when the request fails
    // failure
    function errorCallback(error){
      console.log(error)
    }
  }

}

angular
    .module('app')
    .service('UserService', UserService);
