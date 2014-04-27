'use strict';
var app = angular.module('salaTecnica',['ngRoute','ui.select2','ui.tinymce','ngSanitize','mgcrea.ngStrap','ngAnimate']);


//,['ui.select2','mgcrea.ngStrap','mgcrea.ngStrap.modal','ngAnimate']

$(document).ready(function($) {
  //azul,verde,rosado
    var colors = ["#8e0152 ","#4d9221","#8e0152","#7a0177","#ffa800","#fff000","#238443","#b30000","#23c8b2","#d33502"];
    var rand = Math.floor(Math.random()*colors.length);

   $("header").css("border-bottom","6px solid "+colors[rand]);
   $("footer").css("border-top","4px solid "+colors[rand]);

});
 
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/notaslist.html',
        controller: 'notasCtrl'
      }).
      when('/crearNota', {
        templateUrl: 'templates/nuevaNota.html',
        controller: 'nuevaNotaCtrl'
      }).
      when('/myProfile', {
        templateUrl: 'templates/myProfile',
        controller: 'userCtrl'
      }).
      when('/systemsCatalog', {
        templateUrl: 'templates/systemsCatalog',
        controller: 'nuevaSistemaCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


