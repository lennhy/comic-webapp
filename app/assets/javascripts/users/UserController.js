function UserController(Auth, UserService, FileService, $scope, user) {
  var vm = this;
  var user = user.data;
  vm.user = {
    avatar:{}
  }
  currentUser = Auth.currentUser();
  vm.previewImg = function(div, displayDiv) {
    FileService
      .previewImg(div, displayDiv)
}

  vm.updateUser = function() {
    UserService
     .httpUpdateUser(user.id, vm.user)
       .then(function (res) {
            vm.upload = arr;
            console.log(res);
            $('ul').prepend("<li>You have successfully uploaded a profile pic !</li>");
       },function(error){
             console.log(error)
             $('ul').append("<li>Looks like You are are missing something!</li>");
       })
    };

}

angular
        .module('app')
        .controller('UserController', UserController);
