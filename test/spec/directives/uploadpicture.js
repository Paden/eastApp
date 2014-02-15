'use strict';

describe('Directive: uploadPicture', function () {

  // load the directive's module
  beforeEach(module('eastApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<upload-picture></upload-picture>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uploadPicture directive');
  }));
});
