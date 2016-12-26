  angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
              url: '/',
              templateUrl: 'home/home.html',
              controller: 'HomeController as vm',
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
              controller: 'BookController as vm',
              resolve: {
                  book: function (BookService, $stateParams) {
                    return BookService.httpGetBook($stateParams.id);
                  }
              }
          })

          .state('home.mybooks', {
              url: 'mybooks',
              templateUrl: 'books/my_books.html',
              controller: 'BooksController as vm'
          })

          .state('home.new', {
              url: 'new',
              templateUrl: 'new/new_book.html',
              controller: 'NewBookController as vm',
              resolve: {
                  regions: function (RegionService) {
                    return RegionService.httpGetRegions();
                  },
                  genres: function (GenreService) {
                      return GenreService.httpGetGenres();
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
