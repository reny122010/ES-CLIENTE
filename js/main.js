// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// main.js

'use strict';

var app = angular.module('leno', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
  	.when('/detalharvenda', {
      	templateUrl   : 'partials/detalharVenda.html',
      	title         : 'Detalhes da venda',
     	  controller    : 'detalharVendaController'
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
  LIST_VENDA          : "compra/",
  LIST_CLIENTE        : "cliente/",
  LIST_PRODUTO_COMPRA : "produto/compra/",
});

app.constant('LINK_API', 'http://localhost:8080/');

app.factory('globalVariable', function() {
  return {
      idvenda   : undefined,
      idcliente : undefined
  };
});