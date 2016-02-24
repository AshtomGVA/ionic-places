angular.module('places')
	.controller('LoginCtrl', function($scope, $ionicLoading,$ionicModal,LoginService,$state) {
		$scope.email = "";
		$scope.pwd = "";

		$scope.login=function(){
			$ionicLoading.show({
				template: "Authenticating..."
			});
			LoginService.login($scope.email,$scope.pwd)
				.then(function(response){
					$ionicLoading.hide();
					LoginService.setUser(response.password.email,response.password.profileImageURL);
					$state.go('tab.places');
					//console.log('Loginservice.login response: ',response);
					//console.log('Email: ',response.password.email);
					//console.log('Gravatar: ',response.password.profileImageURL);
			});
		};


		$scope.openSignUp= function(){

			//
			// $ionicModal.fromTemplateUrl
			$ionicModal.fromTemplateUrl('src/auth/signup/signup.modal.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.modal = modal;
				$scope.modal.show();
			});
		}


	});


