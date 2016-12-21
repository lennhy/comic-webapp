// function BookService($http){
//
//   this.httpGetAllBook = function(){
//     return $http.get('/comics.json');
//   };
//
//   this.httpGetBook = function(id){
//     return $http.get(`/comics/${id}`);
//   };
//
//   this.httpCreateBook = function(  title, description, issue, volume, page_count, issue_date, graphic_novel){
//     return $http.post('/comics', { title: title, description: description, issue: issue, volume: volume, page_count: page_count, issue_date: issue_date, graphic_novel: graphic_novel});
//   };
//
//   this.httpUpdateBook = function(id){
//     return $http.patch(`/comics/${id}`);
//   };
//
//   this.httpDeleteBook = function(id){
//     return $http.delete(`/comics/${id}`);
//   };
//
// }
// angular
//     .module('app')
//     .service('BookService', BookService);
