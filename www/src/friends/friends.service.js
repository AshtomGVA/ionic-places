angular.module('places')
.factory('friendsService', function($http,$q){
	return {
		getFriends:function(){
			var deferred = $q.defer();
			$http.get('/api/friends.json')
			.then(function(response){
				deferred.resolve(response.data);
			}, function(response){
				deferred.reject(response.data);
			});

			return deferred.promise;
		}
	}
});