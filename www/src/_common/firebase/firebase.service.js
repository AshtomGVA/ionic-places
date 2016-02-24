angular.module('places').factory("FirebaseService", function ($firebaseAuth) {

	//var ref = new Firebase('https://ionic-places.firebaseio.com/');
	var ref = new Firebase('https://amber-inferno-1491.firebaseio.com/');
	var auth = $firebaseAuth(ref);

	return {

		login: function (email,password) {

			//log with email and password
			return auth.$authWithPassword({
				email:email,
				password:password
			}).then(function(authData){
				//console.log('Authentication successful with payload:', authData);
				return authData;
			}).catch(function(error){
				console.log('Login failed', error);
			});
		},

		signUp: function (email, password) {

			var promise = auth.$createUser({
				email: email,
				password: password
			}).catch(function (error) {
				alert("FirebaseService. " + error);
				return promise;

			});

			return promise;

		}
	}

});