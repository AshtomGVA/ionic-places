// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('places', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})


.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'src/tabs/tabs.html'
  })
  .state('tab.places', {
    url: '/places',
    views: {
      'tab-places': {
        templateUrl: 'src/tabs/places.html'
      }
    }
  })
  .state('tab.places-new', {
    url: '/places/new',
    views: {
      'tab-places-new': {
        templateUrl: 'src/tabs/places_new.html'
      }
    }
  })
  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'src/tabs/map.html'
      }
    }
  })
  .state('tab.friends', {
    url: '/friends',
    /*data: {
      friends:[{
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
      }]
    },*/
    views: {
      'tab-friends': {
        templateUrl: 'src/friends/friends.html'
      }
    },
    controller: 'friendsController as friendsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
