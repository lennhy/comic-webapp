  angular
      .module('app', ['ui.router'])
      .config(function ($stateProvider, $urlRouterProvider) {
          $stateProvider
          
            // page for all comic
            .state('comics', {
                url: '/comics',
                templateUrl: 'views/comics.html',
                controller: 'ComicsController as comics',
                // Use the resolve property to fetch data from the URLs above to receive data.
                resolve: {
                    comics: function (ComicService) {
                      return ComicService.httpGetComics();
                    }
                }
            })

            // page for individual comic
            .state('comics.id', {
                url: '/comics/:id',
                templateUrl: 'views/show.html',
                controller: 'ComicController as comic',
                // Use the resolve instead of putting this in the controller so that the page doesnt have to replace the data in the controlelr causing the page to flicker
                resolve: {
                    comic: function ($stateParams, ComicService) {
                        return ComicService.httpGetComic($stateParams.id);
                    }
                }
            })

            .state('comics.new', {
                url: '/comics/new',
                templateUrl: 'views/new.html',
                controller: 'ComicsController as comics',
            })

            .state('comics.user.id', {
                url: '/comics/user/:id',
                templateUrl: 'views/show.html',
                controller: 'UserController as user'
            });


       $urlRouterProvider.otherwise('/');
    });
