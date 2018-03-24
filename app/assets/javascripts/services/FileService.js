function FileService($http){

  // preview image before upload
  this.previewImg = function(div,  displayDiv){
  $(div).on('change', function(event) {
     var files = event.target.files;
     var image = files[0]
     var reader = new FileReader();
     reader.onload = function(file) {
       var img = new Image();
       img.src = file.target.result;
       img.height=200;
      //  img.width = auto;
      // console.log(image);
       $(displayDiv).html(img);
     }
     reader.readAsDataURL(image);
   });
  }
}

angular
    .module('app')
    .service('FileService', FileService);
