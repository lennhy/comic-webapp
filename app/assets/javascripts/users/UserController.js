function UserController(Auth, UserService, $scope, user) {
  var vm = this;
  var user = user.data;
  vm.user = {
    avatar:{}
  }
  currentUser = Auth.currentUser();

  // preview image before upload
  vm.previewImg = function(div,  displayDiv){

  $(div).on('change', function(event) {
     var files = event.target.files;
     var image = files[0]
     var reader = new FileReader();
     reader.onload = function(file) {
       var img = new Image();
       console.log(file);
       img.src = file.target.result;
       img.height=200;
      //  img.width = auto;
       $(displayDiv).html(img);
     }
     reader.readAsDataURL(image);
   });
  }

  vm.updateUser = function() {
     UserService
       //  before submit form
       .httpUpdateUser(user.id, vm.user)
         .then(function (res) {
              vm.upload = arr;
              console.log(res);
              $('ul').prepend("<li>You have successfully uploaded a profile pic !</li>");
         },function(error){
               console.log(error)
               $('ul').append("<li>Looks like You are are missing something!</li>");
         })
   }

}

angular
        .module('app')
        .controller('UserController', UserController);
