'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
myApp.controller('landingPageController', [function() {

}]);
myApp.controller('waitListController', ['$scope', function($scope) {
	$scope.parties = [];
	$scope.party = {name: '', phone: '', size: ''};

	// define function to submit form
	$scope.saveParty = function() {
		$scope.parties.push($scope.party);
		$scope.party = {name: '', phone: '', size: ''};
	};
}]);
