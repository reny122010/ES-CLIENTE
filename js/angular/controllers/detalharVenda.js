// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// createSessionController.js

'use strict';

app.controller('detalharVendaController', ['$scope','serverRequest','redirectRequest','globalVariable', function ($scope, serverRequest, redirectRequest, globalVariable) {
	$scope.venda = {};
	$scope.cliente = {};
	$scope.listaProdutos = [];
	$scope.nome = "Todas as vendas";

	serverRequest.listaVenda(globalVariable.idvenda).then(function (success){
        $scope.venda = success.data;
        serverRequest.listaCliente(success.data.idcliente).then(function (success){
	        $scope.cliente = success.data;
		},function (){
			$scope.cliente = {'nome' : 'Cliente não encontrado'};
			redirectRequest.vendas();
		});
	},function (){
		$scope.venda = {};
		redirectRequest.vendas();
	});

	serverRequest.listaProdutoCompra(globalVariable.idvenda).then(function (success){
        $scope.listaProdutos = success.data;
	},function (){
		$scope.listaProdutos = [];
	});

}]);