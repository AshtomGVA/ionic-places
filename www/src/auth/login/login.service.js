angular.module('places').factory("LoginService", function (FirebaseService) {

	user = {
		email: '',
		pic: ''
	}

	return {

		setUser: function(email,pic) {
			console.log(email);
			user.email = email;
			user.pic = pic;
		},

		getUser: function() {
			//console.log(email);
			return user;
		},

		login: function(email,password) {
			console.log('Calling Firebase auth service');
			return FirebaseService.login(email,password);

		},

		signUp:function(email, password){
			return FirebaseService.signUp(email,password);
		}
	}

});