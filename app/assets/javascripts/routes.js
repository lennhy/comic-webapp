  angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
              url: '/',
              templateUrl: 'home/home.html',
              controller: 'HomeController as vm',
              // Use the resolve property to fetch data from the URLs above to receive data and to ultimately display in the DOM
              // resolve: {
              //     books: function (BookService) {
              //       return BookService.httpGetAllBooks();
              //     }
              // }
          })
          .state('home.books', {
            url: 'books',
            templateUrl: 'books/books.html',
            controller: 'BooksController as vm',
            resolve: {
                books: function (BookService) {
                  return BookService.httpGetAllBooks();
                }
            }
          })
          .state('home.book', {
              url: 'books/:id',
              templateUrl: 'books/book.html',
              controller: 'BooksController as vm',

          })

          .state('home.mybooks', {
              url: 'mybooks',
              templateUrl: 'mybooks/my_books.html',
              controller: 'MyBooksController as vm'
          })

          .state('home.new', {
              url: 'new',
              templateUrl: 'new/new_book.html',
              controller: 'NewBookController as vm',
              resolve: {
                  regions: function (RegionService) {
                    return RegionService.httpGetRegions();
                  }
              }
          })

          .state('home.profile', {
              url: 'profile',
              templateUrl: 'users/user_profile.html',
              controller: 'UsersController as vm'
          })

          .state('home.publishers', {
              url: 'publishers',
              templateUrl: 'users/publishers.html',
              controller: 'UsersController as vm'
          });

     $urlRouterProvider.otherwise('/');

  });
