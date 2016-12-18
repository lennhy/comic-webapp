(function (){
  angular
      .module('app', ['ui.router'])
      .config(function ($stateProvider, $urlRouterProvider) {
          $stateProvider
            .state('comics', {
                url: '/',
                templateUrl: 'views/comics.html',
                controller: 'ComicsController as comics',
                resolve: { // Use the resolve property to fetch data from the URLs above to receive data.
                    comics: function (ComicService) {
                      return ComicService.httpGetComics();
                    }
                }
            })
            .state('comic', {
                url: '/comic/:id',
                templateUrl: 'views/show.html',
                controller: 'ComicController as comic',
                resolve: { // Use the resolve instead of putting this in the controller so that the page doesnt have to replace the data in the controlelr causing the page to flicker
                    comic: function ($stateParams, ComicService) {
                        return ComicService.httpGetComic($stateParams.id);
                    }
                }
            });

       $urlRouterProvider.otherwise('/');
    });
});
