'use strict';

angular.module('eastApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.popover = {
	  "title": "Title",
	  "content": "Hello Popover<br />This is a multiline message!"
	};
  });
