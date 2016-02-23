angular.module('places')
.controller('friendsController', function($scope){
	$scope.people = [];

	for(var i=0;i<1000;i++) {
		var person = 
		{
			name:'Cool person '+i,
			description:'Nice chap with a cool attitude',
			image:'http://lorempicsum.com/simpsons/100/100'
		}

		$scope.people.push(person);
	}
});