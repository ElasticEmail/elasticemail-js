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
    instance = new ElasticEmail.EmailContent();
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

  describe('EmailContent', function() {
    it('should create an instance of EmailContent', function() {
      // uncomment below and update the code to test EmailContent
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be.a(ElasticEmail.EmailContent);
    });

    it('should have the property body (base name: "Body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

    it('should have the property merge (base name: "Merge")', function() {
      // uncomment below and update the code to test the property merge
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

    it('should have the property attachments (base name: "Attachments")', function() {
      // uncomment below and update the code to test the property attachments
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "Headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

    it('should have the property postback (base name: "Postback")', function() {
      // uncomment below and update the code to test the property postback
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

    it('should have the property envelopeFrom (base name: "EnvelopeFrom")', function() {
      // uncomment below and update the code to test the property envelopeFrom
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "From")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

    it('should have the property replyTo (base name: "ReplyTo")', function() {
      // uncomment below and update the code to test the property replyTo
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "Subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

    it('should have the property templateName (base name: "TemplateName")', function() {
      // uncomment below and update the code to test the property templateName
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

    it('should have the property attachFiles (base name: "AttachFiles")', function() {
      // uncomment below and update the code to test the property attachFiles
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

    it('should have the property utm (base name: "Utm")', function() {
      // uncomment below and update the code to test the property utm
      //var instance = new ElasticEmail.EmailContent();
      //expect(instance).to.be();
    });

  });

}));
