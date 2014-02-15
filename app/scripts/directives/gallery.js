'use strict';

angular.module('eastApp').directive('gallery', function ()
{
    return {
		templateUrl : '/views/directives/gallery.html',
		restrict    : 'E',
		link        : function postLink(scope, element, attrs)
		{
			scope.venues =  ['venue1','venue2','venue3','venue4','venue5', 'venue6','venue7','venue8','venue9',
							 'venue12','venue22','venue32','venue42','venue52', 'venue62','venue72','venue82','venue92'];
		}
    };
 });
