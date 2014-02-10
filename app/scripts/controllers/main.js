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

    $scope.mapOptions = {
        styles : [
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              { color: '#FF8BA4' },
            ]
          },{
            featureType: 'administrative.neighborhood',
            elementType: 'geometry',
            stylers: [
              { color: '#333' },
              { weight: 1.6 }
            ]
          }, {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
              { color: '#FF8BA4' },
              { invert_lightness: true }
            ]
          }, {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              { color: '#ccc' },
            ]
          }, {
            featureType: 'poi.school',
            elementType: 'geometry',
            stylers: [
              { hue: '#f90' },
              { lightness: -15 },
              { saturation: 99 }
            ]
          }
        ]};
});
