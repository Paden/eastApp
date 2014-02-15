'use strict';

angular.module('eastApp').directive('venue', function ()
{
    return {
		templateUrl : '/views/directives/venue.html',
		restrict    : 'E',
		scope       :  { entity:'=' }
    };
 });
