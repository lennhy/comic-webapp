function ComicService($http){

  this.httpGetAllComics = function(){
    return $http.get('/comics.json');
  };

  // this.httpGetComic = function(id){
  //   return $http.get(`/comics/${id}.json`);
  // };
  //
  // this.httpCreateComic = function(id){
  //   return $http.post('/comics');
  // };
  //
  // this.httpUpdateComic = function(id){
  //   return $http.patch(`/comics/${id}`);
  // };
  //
  // this.httpDeleteComic = function(id){
  //   return $http.delete(`/comics/${id}`);
  // };

}
angular
    .module('app')
    .service('ComicService', ComicService);


    // / ♥ rake routes
    //                   Prefix Verb   URI Pattern               Controller#Action
    //                     root GET    /                         application#index
    //         new_user_session GET    /users/sign_in(.:format)  devise/sessions#new
    //             user_session POST   /users/sign_in(.:format)  devise/sessions#create
    //     destroy_user_session DELETE /users/sign_out(.:format) devise/sessions#destroy
    // cancel_user_registration GET    /users/cancel(.:format)   devise/registrations#cancel
    //        user_registration POST   /users(.:format)          devise/registrations#create
    //    new_user_registration GET    /users/sign_up(.:format)  devise/registrations#new
    //   edit_user_registration GET    /users/edit(.:format)     devise/registrations#edit
    //                          PATCH  /users(.:format)          devise/registrations#update
    //                          PUT    /users(.:format)          devise/registrations#update
    //                          DELETE /users(.:format)          devise/registrations#destroy
    //                   comics GET    /comics(.:format)         comics#index
    //                          POST   /comics(.:format)         comics#create
    //                new_comic GET    /comics/new(.:format)     comics#new
    //                    comic GET    /comics/:id(.:format)     comics#show
    //                          PATCH  /comics/:id(.:format)     comics#update
    //                          PUT    /comics/:id(.:format)     comics#update
    //                          DELETE /comics/:id(.:format)     comics#destroy
