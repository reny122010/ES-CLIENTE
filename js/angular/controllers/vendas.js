// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// createSessionController.js

'use strict';

app.controller('vendasController', ['$scope','serverRequest', function ($scope, serverRequest) {
	$scope.vendas = [];
	$scope.nome = "Todas as vendas";

	serverRequest.listaVendas().then(function (success){
        $scope.vendas = success.data;
	},function (){
		$scope.vendas = [];
	});

}]);