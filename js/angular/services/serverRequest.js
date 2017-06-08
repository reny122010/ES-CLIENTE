// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// requestServer.js

app.service('serverRequest', serverRequest);

serverRequest.$inject = ['$http','$q','LenoApiUrl','LINK_API'];

function serverRequest($http, $q, LenoApiUrl, LINK_API){
	return({
		listaVendas : listaVendas,
		listaVenda  : listaVenda,
		listaCliente: listaCliente,
		listaProdutoCompra : listaProdutoCompra
	});

	function getRequest(route){
		var request = {
			method: 'GET',
			url: route,
			withCredentials: true,
			headers: {
			   	'Content-Type': "application/json"
			}
		};
 		return $http(request);
	};

    function listaVendas(){
    	return getRequest(LINK_API+LenoApiUrl.LIST_VENDA);
    };

    function listaVenda(idvenda){
    	return getRequest(LINK_API+LenoApiUrl.LIST_VENDA+idvenda+'/');
    }

    function listaCliente(idcliente){
    	return getRequest(LINK_API+LenoApiUrl.LIST_CLIENTE+idcliente+'/');
    }

    function listaProdutoCompra(idcompra){
    	return getRequest(LINK_API+LenoApiUrl.LIST_PRODUTO_COMPRA+idcompra+'/');
    }
}