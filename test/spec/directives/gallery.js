'use strict';

describe('Directive: gallery', function () {

  // load the directive's module
  beforeEach(module('eastApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gallery></gallery>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gallery directive');
  }));
});
