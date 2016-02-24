angular.module('places')
.controller('friendsController', function($scope,friendsService){
	$scope.people = 'toto';

	$scope.getFriends = function() {
		console.log("Getting friends");
		$scope.people = friendsService.getFriends()
		.then(function(data){
			console.log(data);
			$scope.people = data;
		});
	}

	$scope.getFriends();

	/*for(var i=0;i<1000;i++) {
		var person = 
		{
			name:'Cool person '+i,
			description:'Nice chap with a cool attitude',
			image:'http://lorempicsum.com/simpsons/100/100'
		}

		$scope.people.push(person);
	}*/
});