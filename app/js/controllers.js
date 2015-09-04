'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
myApp.controller('landingPageController', [function() {

}]);

myApp.controller('waitListController', ['$scope', '$firebase', function($scope, $firebase) {

	// establish connection to firebase db
	var partiesFirebaseRef = new Firebase('https://waitandeat-alexwang.firebaseio.com');

	// list of parties
	$scope.parties = $firebase(partiesFirebaseRef); 
	// single party
	$scope.newParty = {name: '', phone: '', size: ''};

	// define function to submit form
	$scope.saveParty = function() {
		$scope.parties.$add($scope.newParty);
		$scope.newParty = {name: '', phone: '', size: ''};
	};
}]);
