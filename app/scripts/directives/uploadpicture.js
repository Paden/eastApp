'use strict';

angular.module('eastApp').directive('uploadPicture', ['$timeout', '$modal', function ( $timeout, $modal )
{
	return {
		templateUrl: 'views/directives/uploadpicture.html',
		restrict   : 'A',
		replace    : true,
		link: function postLink(scope, element)
		{
			element.on('click', function()
			{
				$modal({title: 'Upload a Picture', contentTemplate: 'views/directives/uploadpicture-modal.html'});
			});
		}
	};
}]);
