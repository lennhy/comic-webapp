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

  this.httpUpdateUser = function(id, data){
      var req = {
        method: 'PATCH',
        url: '/users/'+ id,
        data: {user: data},
        headers: {
          'Content-Type': 'application/json'
        }
      }
      return $http(req)
      .then(successCallback)
      .catch(errorCallback)

      function successCallback(data){
        return data;
      }
      function errorCallback(error){
        console.log(error);
      }
   };
}

angular
    .module('app')
    .service('UserService', UserService);
