// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// requestServer.js

app.service('redirectRequest', redirectRequest);

redirectRequest.$inject = ['$location'];

function redirectRequest($location){
	return({
		detalharVenda : detalharVenda,
		vendas		  : vendas
	});

    function detalharVenda(){
    	$location.path('/detalharvenda');
    };
    function vendas(){
    	$location.path('/');
    };
}