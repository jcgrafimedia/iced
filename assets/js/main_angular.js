
angular.module('icedusmp' , [])

	//Definiendo el controlador de la ruta base
	
	.controller('route', ['$scope', function($scope){

		$scope.ruta_base = 'http://www.usmp.edu.pe/iced/';

	}]);
