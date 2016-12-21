  angular
      .module('app')
      .config(function ($stateProvider, $urlRouterProvider) {
          $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'HomeController as vm'
                // Use the resolve property to fetch data from the URLs above to receive data.and to ultimately display in the DOM
                // resolve: {
                //     comics: function (ComicService) {
                //       return ComicService.httpGetAllComics();
                //     }
                // }
            })
            .state('home.comic', {
                url: 'comics/:id',
                templateUrl: 'comic/comic.html',
                controller: 'ComicController as vm'

            })
            // .state('comics.new', {
            //     url: '/comics/new',
            //     templateUrl: 'templates/comics/new.html',
            //     controller: 'HomeController as vm',
            // })
            .state('home.publishers', {
                url: 'publishers',
                templateUrl: 'users/publishers.html',
                controller: 'UsersController as vm'
            })
            .state('home.mybooks', {
                url: 'mybooks',
                templateUrl: 'mybooks/my_books.html',
                controller: 'MyBooksController as vm'
            })
            .state('home.profile', {
                url: 'profile',
                templateUrl: 'users/user_profile.html',
                controller: 'UsersController as vm'
            });


       $urlRouterProvider.otherwise('/');
    });
