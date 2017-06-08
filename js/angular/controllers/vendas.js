// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// createSessionController.js

'use strict';

app.controller('vendasController', ['$scope','serverRequest', function ($scope, serverRequest) {
	$scope.vendas = [];
	$scope.nome = "Todas as vendas";
	
	$scope.vendas = serverRequest.listaVendas();

}]);