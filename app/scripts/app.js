'use strict';

var depModules = ['ngRoute'    , 'monospaced.qrcode', 'ngAnimate' , 'mgcrea.ngStrap', 'mgcrea.ngStrap.helpers.parseOptions',
				  'google-maps', 'webStorageModule' , 'ngResource', 'ngSanitize'    ,  'localytics.directives'];

angular.module('eastApp', depModules);
angular.module('eastApp').config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
{
	var directory      = 'views/',
		availableViews = [ 'home', 'artists', 'exhibitions', 'events', 'sponsors', 'tour' ],
		defView        = availableViews[0];

	$routeProvider.when('/:view?',
	{
        title       : 'East App',
        templateUrl : function( $routeParams )
        {
			var view       =  $routeParams.view,
				isGoodView =  availableViews.indexOf( view ) >= 0,
				template   =  isGoodView ? view : defView;

            return directory + template + '.html';
        }
    });

    $routeProvider.otherwise( {redirectTo : '/' } );

    $locationProvider.hashPrefix('!');
}]);
