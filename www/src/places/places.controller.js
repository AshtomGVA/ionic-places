"use strict";

angular.module('places')
.controller('PlacesCtrl', function($scope) {
	$scope.places = [];

	for(var i=0;i<1000;i++) {
		var place = 
		{
			name:'Geneva '+i,
			description:'Cool place to see with great robots inside',
			image:'http://lorempicsum.com/futurama/100/100'
		}
		$scope.places.push(place);
	}
});