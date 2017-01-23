function UserController(Auth, UserService) {
  var vm = this;
  vm.currentUser = Auth.currentUser();
  vm.id='';
  var inputElement = document.getElementById("uploadProfilePic");
  inputElement.addEventListener("change", handleFiles, false);

  function handleFiles() {

    var preview = document.getElementById('previewProfilePic');
    // this is the file object being passed in from the file input value
    var numFiles = this.files.length;
    console.log(vm.currentUser);

    if(numFiles !== 0 || numFiles !== null){
      for(let i=0; i < numFiles; i++){
          vm.currentUser.avatar = this.files[i];
          var file = this.files[i];

      var img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      console.log(vm.currentUser.avatar);
      preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
      // console.log(vm.book.images);

      var reader = new FileReader();
      // event handle triggered after the reading of the file has been successfully commpleted
          reader.onload = (function(aImg) {
            return function(e) {
              aImg.src = e.target.result;
             };
           })(img);
          reader.readAsDataURL(file);
          // console.log(vm.currentUser.avatar);

      }
    }
}

vm.createProfilePic = function(){
  UserService
    .httpCreateProfilePic(vm.currentUser.avatar, vm.id)
    .then(function (data) {
          return vm.currentUser.avatar;
    },function(error){
          console.log(error)

      // $('ul').append("<li>" + error + "</li>");
      // success and error are special functions added to a promise by $http

      // success or error will be called later - when this block is finished
      // executing we don't have the name, we've just specified what to do
      // when we do eventually get it - or what to do if we fail to get it.
      // Promises are not actually complicated, they're objects that contain a
      // reference to functions to call when something fails or succeeds.

    })
  }
}

angular
        .module('app')
        .controller('UserController', UserController);
