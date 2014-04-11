define([
  'superapi'
], function (superapi) {
  'use strict';

  describe('request url', function () {
    it('should append the service url to the baseUrl', function () {
      var api = superapi.default({
        baseUrl: 'http://foo.domain.tld/api',
        services: {
          foo: {
            path: '/foo'
          }
        }
      });

      api.url('foo').should.eql('http://foo.domain.tld/api/foo');
    });

    it('should add a slash in front of route path if missing', function () {
      var api = superapi.default({
        baseUrl: 'http://foo.domain.tld/api',
        services: {
          foo: {
            path: 'foo'
          }
        }
      });

      api.url('foo').should.eql('http://foo.domain.tld/api/foo');
    });

    it('should support route as a string', function () {
      var api = superapi.default({
        baseUrl: 'http://foo.domain.tld/api',
        services: {
          foo: 'bar'
        }
      });

      api.url('foo').should.eql('http://foo.domain.tld/api/bar');
    });

    it('should throw error if path is missing', function () {
      var api = superapi.default({
        baseUrl: 'http://foo.domain.tld/api',
        services: {
          foo: {}
        }
      });

      api.url.bind(null, 'foo').should.throw();
    });
  });

  describe.skip('request method', function () {
  });

  describe.skip('request headers', function () {

  });
});
