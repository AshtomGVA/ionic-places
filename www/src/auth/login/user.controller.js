angular.module('places')
	.controller('UserCtrl', function($scope, LoginService) {
		$scope.user = LoginService.getUser();
	});