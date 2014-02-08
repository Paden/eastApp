'use strict';

angular.module('eastApp').controller('MainCtrl', function ($scope)
{
    $scope.popover =
    {
        'title': 'Title',
        'content': 'Hello Popover<br />This is a multiline message!'
    };
    $scope.map = {
        zoom: 8,
        center: {
            latitude: 45,
            longitude: -73
        }
    };
});
