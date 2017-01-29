function NewBookController(BookService, regions, genres, $scope, Upload, $http) {
  var vm = this;
  vm.regions = regions.data;
  vm.genres = genres.data;
  vm.book = {
       title: '',
       description: '',
       issue:'',
       volume:'',
       page_count:'',
       issue_date:'',
       graphic_novel:'',
       region_id: null,
       genre_ids: [],
       pages: {}
  };
  //
  // // def decode_base64
  // //   binding.pry
  //   decoded_data = params[:comic][:pages].map { |page| Base64.decode64(page[:base64]) }
  //   data = decoded_data.map { |d|  StringIO.new(d) }
  //   data
  // end

  //
  // vm.submit = function(){
  //   $http.post("/comics", vm.boook)
  //   .then(function(res) {
  //     vm.upload = res.data.pages;
  //   })
  //   .catch(function(error){
  //     console.log(error.data);
  //   });
  // }

  // def decode_base64
  //     Rails.logger.info 'decoding base64 file'
  //     # decode base64 string
  //     decoded_data = params[:comic][:pages].map { |page| Base64.decode64(page[:base64]) }
  //
  //     # create 'file' understandable by Paperclip
  //     data = decoded_data.map { |d|  StringIO.new(d) }
  //
  //     match_data = data.map do |d|
  //       match_data.class_eval do
  //           attr_accessor :content_type, :original_filename
  //       end
  //     end
  //
  //     # set file properties
  //     set_data = match_data.map do |md|
  //        md.content_type = params[:comic][:pages][:filetype]
  //        md.original_filename = params[:comic][:pages][:filename]
  //     end
  //     # return data to be used as the attachment file (paperclip)
  //     set_data
  // end

  vm.createBook = function() {
     BookService
       //  before submit form
       .httpCreateBook(vm.book)
         .then(function (res) {
              vm.upload = res.data.comic.pages;
              console.log(res);
              $('ul').prepend("<li>You have successfully created a new comic!</li>");
         },function(error){
               console.log(error)
               $('ul').append("<li>Looks like You are are missing something!</li>");
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
  // vm.printBook;
  //
  // vm.book = {
  //    title: '',
  //    description: '',
  //    issue:'',
  //    volume:'',
  //    page_count:'',
  //    issue_date:'',
  //    graphic_novel:'',
  //    region_id: null,
  //    genre_ids: [];
  //  };

  //  vm.setPages = function(){
  //    console.log($scope.pages);
  //    console.log(vm.book.genre_ids);
   //
  //  }
    //
    // $scope.submit = function() {
    //   console.log(vm.book.genre_ids);
    //   if ($scope.pages) {
    //     // console.log($scope.file);
    //     $scope.upload(
    //           $scope.pages,
    //           vm.book.title,
    //           vm.book.description,
    //           vm.book.issue,
    //           vm.book.volume,
    //           vm.book.page_count,
    //           vm.book.issue_date,
    //           vm.book.graphic_novel,
    //           vm.book.region_id,
    //           vm.book.genre_ids
    //         )
    //   }
    // }
    //
    //   // upload on file select or drop
    //   $scope.upload = function (
    //     pages,
    //     title,
    //     description,
    //     issue,
    //     volume,
    //     page_count,
    //     issue_date,
    //     graphic_novel,
    //     region_id,
    //     genre_ids
    //   ) {
    //       Upload.upload({
    //           url: '/comics',
    //           method: 'pages',
    //           headers: {'Content-Type': 'application/json'},
    //           data: {
    //             comic: {
    //               pages,
    //               title,
    //               description,
    //               issue,
    //               volume,
    //               page_count,
    //               issue_date,
    //               graphic_novel,
    //               region_id,
    //               genre_ids
    //           }
    //         }
    //       }).then(function (resp) {
    //           console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    //       }, function (err) {
    //           console.log('Error status: ' + err.status);
    //       });
    //     }
    //   };

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
  //           method: 'pages',
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
