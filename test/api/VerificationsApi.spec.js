/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    The API has a limit of 20 concurrent connections and a hard timeout of 600 seconds per request.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://app.elasticemail.com/marketing/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: support@elasticemail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ElasticEmail);
  }
}(this, function(expect, ElasticEmail) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ElasticEmail.VerificationsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VerificationsApi', function() {
    describe('verificationsByEmailDelete', function() {
      it('should call verificationsByEmailDelete successfully', function(done) {
        //uncomment below and update the code to test verificationsByEmailDelete
        //instance.verificationsByEmailDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verificationsByEmailGet', function() {
      it('should call verificationsByEmailGet successfully', function(done) {
        //uncomment below and update the code to test verificationsByEmailGet
        //instance.verificationsByEmailGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verificationsByEmailPost', function() {
      it('should call verificationsByEmailPost successfully', function(done) {
        //uncomment below and update the code to test verificationsByEmailPost
        //instance.verificationsByEmailPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verificationsFilesByIdDelete', function() {
      it('should call verificationsFilesByIdDelete successfully', function(done) {
        //uncomment below and update the code to test verificationsFilesByIdDelete
        //instance.verificationsFilesByIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verificationsFilesByIdResultDownloadGet', function() {
      it('should call verificationsFilesByIdResultDownloadGet successfully', function(done) {
        //uncomment below and update the code to test verificationsFilesByIdResultDownloadGet
        //instance.verificationsFilesByIdResultDownloadGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verificationsFilesByIdResultGet', function() {
      it('should call verificationsFilesByIdResultGet successfully', function(done) {
        //uncomment below and update the code to test verificationsFilesByIdResultGet
        //instance.verificationsFilesByIdResultGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verificationsFilesByIdVerificationPost', function() {
      it('should call verificationsFilesByIdVerificationPost successfully', function(done) {
        //uncomment below and update the code to test verificationsFilesByIdVerificationPost
        //instance.verificationsFilesByIdVerificationPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verificationsFilesPost', function() {
      it('should call verificationsFilesPost successfully', function(done) {
        //uncomment below and update the code to test verificationsFilesPost
        //instance.verificationsFilesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verificationsFilesResultGet', function() {
      it('should call verificationsFilesResultGet successfully', function(done) {
        //uncomment below and update the code to test verificationsFilesResultGet
        //instance.verificationsFilesResultGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verificationsGet', function() {
      it('should call verificationsGet successfully', function(done) {
        //uncomment below and update the code to test verificationsGet
        //instance.verificationsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
