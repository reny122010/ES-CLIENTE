// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// main.js

'use strict';

var app = angular.module('leno', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
  	.when('/menu', {
      	templateUrl   : 'partials/menu.html',
      	title         : 'League of Sounds Início',
     	  controller    : 'testeController'
    })
    .when('/', {
      	templateUrl   : 'partials/vendas.html',
      	title         : 'Vendas',
        controller    : 'vendasController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.constant('LenoApiUrl',{
  LIST_VENDAS     : "compra/"
});

app.constant('LINK_API', 'http://localhost:8080/');