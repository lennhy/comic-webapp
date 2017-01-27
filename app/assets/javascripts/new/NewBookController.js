function NewBookController(BookService, regions, genres, $scope, Upload) {
  var vm = this;
  vm.regions = regions.data;
  vm.genres = genres.data;
  vm.printBook;
  //
  vm.book = {
     title: '',
     description: '',
     issue:'',
     volume:'',
     page_count:'',
     issue_date:'',
     graphic_novel:'',
     region_id: null,
     genre_ids: []
   };

   vm.setPages = function(){
     console.log($scope.pages);
     console.log(vm.book.genre_ids);

   }

    $scope.submit = function() {
      console.log(vm.book.genre_ids[0]);
      if ($scope.pages) {
        // console.log($scope.file);
        $scope.upload(
              $scope.pages,
              vm.book.title,
              vm.book.description,
              vm.book.issue,
              vm.book.volume,
              vm.book.page_count,
              vm.book.issue_date,
              vm.book.graphic_novel,
              vm.book.region_id,
              vm.book.genre_ids
            )
      }
    }

      // upload on file select or drop
      $scope.upload = function (
        pages,
        title,
        description,
        issue,
        volume,
        page_count,
        issue_date,
        graphic_novel,
        region_id,
        genre_ids
      ) {
          Upload.upload({
              url: '/comics',
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              data: {
                comic: {
                  pages,
                  title,
                  description,
                  issue,
                  volume,
                  page_count,
                  issue_date,
                  graphic_novel,
                  region_id,
                  genre_ids: genre_ids
              }
            }
          }).then(function (resp) {
              console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          }, function (err) {
              console.log('Error status: ' + err.status);
          });
        }
      };

    // $scope.uploadFiles = function (pages) {
    //   if (pages && pages.length) {
    //     // or send them all together for HTML5 browsers:
    //     Upload.upload({comic: {pages: pages}});
    //   }
    // }
    //   }).then(function (resp) {
    //       console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    //   }, function (resp) {
    //       console.log('Error status: ' + resp.status);
    //   }, function (evt) {
    //       var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    //       console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    //   });
  // };

  //   // upload on file select or drop
  //   $scope.upload = function (book) {
  //     console.log("book" + book[0]);
  //       Upload.upload({
  //           url: '/comics',
  //           method: 'POST',
  //           headers: {'Content-Type': 'application/json'},
  //           // data: {pages: pages, 'username': $scope.username}
  //
  //           data: {
  //             comic: book
  //           }
  //       }).then(function (resp) {
  //           console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
  //       }, function (err) {
  //           console.log('Error status: ' + err.status);
  //       });
  // };
// }

angular
        .module('app')
        .controller('NewBookController', NewBookController);
