function UserService($http){

  this.httpGetUser = function(id){
    return $http.get('/users/'+ id)
    .then(function (res) {
      return res;
            // do something with the response
            }, function (error) {
              console.log(error);
            });
  };

  this.httpGetUsers = function(){
    return $http.get('/users')
  };

  this.httpUpdateUser = function(id, avatar){
      var req = {
        method: 'PATCH',
        url: '/users/'+ id,
        data: {user: avatar}
      }
      return $http(req)
      .then(successCallback)
      .catch(errorCallback)

      function successCallback(data){
        return data;
      }
      // what to do when the request fails
      // failure
      function errorCallback(error){
        console.log(error)
      }
}

  // this.httpCreateProfilePic = function(avatar, userId){
  //   var req = {
  //     method: 'POST',
  //     url: '/users/'+ userId,
  //     data: {user: avatar}
  //   }
  //   return $http(req)
  //   .then(successCallback)
  //   .catch(errorCallback)
  //
  //   function successCallback(data){
  //     return data;
  //   }
  //   // what to do when the request fails
  //   // failure
  //   function errorCallback(error){
  //     console.log(error)
  //   }
  // }

}

angular
    .module('app')
    .service('UserService', UserService);
