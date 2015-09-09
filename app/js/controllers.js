'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
myApp.controller('landingPageController', [function() {

}]);

myApp.controller('waitListController', ['$scope', '$firebase', function($scope, $firebase) {

	// establish connection to firebase db
	var partiesFirebaseRef = new Firebase('https://waitandeat-alexwang.firebaseio.com/parties');

	// Connect $sope.parties to live Firebase DB
	$scope.parties = $firebase(partiesFirebaseRef); 
	// Object to store data from waitlist formj
	$scope.newParty = {name: '', phone: '', size: '', done: false, notified: 'No'};

	//function to save a new party to Firebase DB
	$scope.saveParty = function() {
		$scope.parties.$add($scope.newParty);
		$scope.newParty = {name: '', phone: '', size: '', done: false, notified: 'No'};
	};

	//function to send text message to a party.
	$scope.sendTextMessage = function(eachParty) {
		var textMessageRef = new Firebase('https://waitandeat-alexwang.firebaseio.com/textmessages');
		var textMessages = $firebase(textMessageRef);
		var newTextMessage = {
			name: eachParty.name,
			phoneNumber: eachParty.phone,
			size: eachParty.size
		};
		textMessages.$add(newTextMessage);
		eachParty.notified = 'Yes';
		$scope.parties.$save(eachParty.$id);
	};
}]);
