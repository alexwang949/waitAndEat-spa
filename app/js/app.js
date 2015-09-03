'use strict';

var myApp =
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]);


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'partials/landing_page.html', 
      controller: 'landingPageController'
  });
  $routeProvider.when('/waitlist', {
      templateUrl: 'partials/waitlist.html', 
      controller: 'waitListController'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);

