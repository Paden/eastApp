'use strict';

angular.module('eastApp').directive('venue', function ()
{
    return {
		templateUrl : '/views/directives/venue.html',
		restrict    : 'E',
		link        : function postLink(scope, element, attrs)
		{
			var random = Math.floor(Math.random() * 7) + 1;
			scope.imageSrc =  '/images/img-' + random + '.jpg';
		}
    };
 });
