angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
              url: '/',
              templateUrl: 'home/home.html',
              controller: 'HomeController as vm',
          })

          // Create a new book
          // Instead, we can use the resolve property we spoke about earlier - this
          // allows us to specify a bunch of promises that we want to be resolved before our
          // view is rendered.
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

          // Index page for all books
          .state('home.books', {
            url: 'books',
            templateUrl: 'books/books.html',
            controller: 'BooksController as vm',
            // resolve: {
            //     books: function (BookService) {
            //       return BookService.httpGetAllBooks();
            //     }
            // }
          })

          // Show page for a selected book
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

          // Current User books
          .state('home.mybooks', {
              url: 'users/:id',
              templateUrl: 'users/user_books.html'
          })

          // Current User profile
          .state('home.profile', {
              url: 'users/:id',
              templateUrl: 'users/user_profile.html',
              controller: 'UserController as vm',
          })

          // Publishers index page
          .state('home.publishers', {
              url: 'publishers',
              templateUrl: 'users/publishers.html',
              controller: 'UsersController as vm',
              resolve: {
                allUsers: function (UserService) {
                  return UserService.httpGetUsers();
                }
              }
          });

     $urlRouterProvider.otherwise('/');

  });
