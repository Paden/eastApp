'use strict';

angular.module('eastApp').controller('MainCtrl', ['$scope', 'Artflask', function( $scope, Artflask )
{
    $scope.popover =
    {
        'title': 'Title',
        'content': 'Hello Popover<br />This is a multiline message!'
    };
    $scope.map = {
        zoom: 15,
        center: {
            latitude: 30.2646809,
            longitude: -97.6979548,
        }
    };

    $scope.mapOptions = {
        styles : [
        {
            'featureType': 'water',
            'stylers': [
                {
                    'color': '#46bcec'
                },
                {
                    'visibility': 'on'
                }
            ]
        },
        {
            'featureType': 'landscape',
            'stylers': [
                {
                    'color': '#f2f2f2'
                }
            ]
        },
        {
            'featureType': 'road',
            'stylers': [
                {
                    'saturation': -100
                },
                {
                    'lightness': 45
                }
            ]
        },
        {
            'featureType': 'road.highway',
            'stylers': [
                {
                    'visibility': 'simplified'
                }
            ]
        },
        {
            'featureType': 'road.arterial',
            'elementType': 'labels.icon',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#444444'
                }
            ]
        },
        {
            'featureType': 'transit',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'poi',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        }
    ]};
}]);


