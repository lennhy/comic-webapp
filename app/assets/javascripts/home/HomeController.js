function HomeController(Auth, $rootScope) {
  var vm = this;

  Auth.currentUser()
    .then(function(user){
        $rootScope.currentUser = user
      }, function(error){
        console.log(error)
    })

}

angular
        .module('app')
        .controller('HomeController', HomeController);
