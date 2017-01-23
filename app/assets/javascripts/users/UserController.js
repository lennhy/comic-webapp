function UserController(UserService, allUsers) {
  console.log(allUsers);
  var vm = this;
  vm.users = allUsers.data;


  var inputElement = document.getElementById("uploadProfilePic");
  inputElement.addEventListener("change", handleFiles, false);

  function handleFiles() {

    var preview = document.getElementById('previewProfilePic');
    // this is the file object being passed in from the file input value
    var numFiles = this.files.length;

    if(numFiles !== 0 || numFiles !== null){
      for(let i=0; i < numFiles; i++){
        this.files[i].size = 100;
        var file = this.files[i];

      var img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      console.log(img.file);
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
      }
    }
}
}

angular
        .module('app')
        .controller('UserController', UserController);
