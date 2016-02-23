angular.module('places')
.controller('friendsController', function(){
	var vm = this;
	vm.friends = [{
		'name':'James Bond',
		'status':'available'
	},{
		'name':'Donald Duck',
		'status':'busy'
	},{
		'name':'Mickey Mouse',
		'status':'not available'
	},{
		'name':'Goofy',
		'status':'playing'
	}];
});