function UserController(Auth, UserService, FileService, $scope, user) {
  var vm = this;
  // vm.user = user.data;
  vm.user = {
       id: user.data.id,
       name: user.data.name,
       role: user.data.role,
       email: user.data.email,
       avatar: user.data.avatar
  };
  console.log(user.data.avatar)
  currentUser = Auth.currentUser();

  vm.previewImg = function(div, displayDiv) {
    FileService
      .previewImg(div, displayDiv)
  }

  vm.updateUser = function() {
    UserService.httpUpdateUser(vm.user.id, vm.user)
       .then(function (res) {
         // var arr=[];
            // for(let i=0; i < res.data.user.avatar.length; i++){
            //   arr.push(res.data.comic.pages[i].image);
            // };
            console.log(res.data);
            vm.upload = res.data.avatar;
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
