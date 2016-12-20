angular
    .module('app',['ui.router', 'templates'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
              .state('comics', {
                  url: '/comics',
                  templateUrl: 'templates/home.html',
                  controller: 'ComicsController as vm',
                  resolve: {
                      comics: function (ComicService) {
                        return ComicService.httpGetAllComics();
                      }
                  }
              });
      $urlRouterProvider.otherwise('/');
});
