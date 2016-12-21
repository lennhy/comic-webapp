  angular
      .module('app')
      .config(function ($stateProvider, $urlRouterProvider) {
          $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'HomeController as vm'
            })

            .state('home.book', {
                url: 'books/:id',
                templateUrl: 'books/book.html',
                controller: 'BooksController as vm',
                // Use the resolve property to fetch data from the URLs above to receive data and to ultimately display in the DOM
                resolve: {
                    book: function ($stateParams, BookService) {
                      return BookService.httpGetBook($stateParams.id);
                    }
                }
            })

            .state('home.mybooks', {
                url: 'mybooks',
                templateUrl: 'mybooks/my_books.html',
                controller: 'MyBooksController as vm'
            })

            .state('home.new', {
                url: 'new',
                templateUrl: 'new/new_book.html',
                controller: 'NewBookController as vm'
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
