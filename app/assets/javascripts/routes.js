  angular
      .module('app')
      .config(function ($stateProvider, $urlRouterProvider) {
          $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'HomeController as vm'
            })

            .state('home.books', {
                url: 'books',
                templateUrl: 'books/books.html',
                controller: 'BooksController as vm'
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
