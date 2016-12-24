// This IFEE runs code after the DOM is loaded
(function(){
  'use strict';

  angular
      .module('app', ['ui.router', 'templates', 'ngMessages', 'Devise'])
      .config(function($httpProvider){
          $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
      });


}());
