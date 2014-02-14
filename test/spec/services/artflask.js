'use strict';

describe('Service: Artflask', function () {

  // load the service's module
  beforeEach(module('eastApp'));

  // instantiate service
  var Artflask;
  beforeEach(inject(function (_Artflask_) {
    Artflask = _Artflask_;
  }));

  it('should do something', function () {
    expect(!!Artflask).toBe(true);
  });

});
