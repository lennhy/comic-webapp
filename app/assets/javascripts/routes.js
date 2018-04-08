angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
              url: '/',
              templateUrl: 'home/home.html',
              controller: 'HomeController as vm',
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

          // Index page for all books
          .state('home.books', {
            url: 'books',
            templateUrl: 'books/books.html',
            controller: 'BooksController as vm',

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
          // book: function (BookService, $stateParams) {
          //   return BookService.httpGetBook($stateParams.id);
          // }
          // Current User books
          .state('home.mybooks', {
              url: 'mybooks/:id',
              templateUrl: 'users/user_books.html'
          })

          // Current User profile
          .state('home.profile', {
              url: 'users/:id',
              templateUrl: 'users/user_profile.html',
              controller: 'UserController as vm',
              resolve: {
                  user: function (UserService, $stateParams) {
                    return UserService.httpGetUser($stateParams.id);
                  }
              }
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
