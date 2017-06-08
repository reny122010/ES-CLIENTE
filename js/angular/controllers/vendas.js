// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// createSessionController.js

'use strict';

app.controller('vendasController', ['$scope','serverRequest','redirectRequest', 'globalVariable', function ($scope, serverRequest, redirectRequest, globalVariable) {
	$scope.vendas = [];
	$scope.nome = "Todas as vendas";

	serverRequest.listaVendas().then(function (success){
        $scope.vendas = success.data;
	},function (){
		$scope.vendas = [];
	});

	$scope.detalharVenda = function(idvenda){
		globalVariable.idvenda = idvenda;
		redirectRequest.detalharVenda();
	}

}]);