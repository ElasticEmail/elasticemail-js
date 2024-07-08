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
    instance = new ElasticEmail.SubaccountEmailSettings();
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

  describe('SubaccountEmailSettings', function() {
    it('should create an instance of SubaccountEmailSettings', function() {
      // uncomment below and update the code to test SubaccountEmailSettings
      //var instance = new ElasticEmail.SubaccountEmailSettings();
      //expect(instance).to.be.a(ElasticEmail.SubaccountEmailSettings);
    });

    it('should have the property monthlyRefillCredits (base name: "MonthlyRefillCredits")', function() {
      // uncomment below and update the code to test the property monthlyRefillCredits
      //var instance = new ElasticEmail.SubaccountEmailSettings();
      //expect(instance).to.be();
    });

    it('should have the property requiresEmailCredits (base name: "RequiresEmailCredits")', function() {
      // uncomment below and update the code to test the property requiresEmailCredits
      //var instance = new ElasticEmail.SubaccountEmailSettings();
      //expect(instance).to.be();
    });

    it('should have the property emailSizeLimit (base name: "EmailSizeLimit")', function() {
      // uncomment below and update the code to test the property emailSizeLimit
      //var instance = new ElasticEmail.SubaccountEmailSettings();
      //expect(instance).to.be();
    });

    it('should have the property dailySendLimit (base name: "DailySendLimit")', function() {
      // uncomment below and update the code to test the property dailySendLimit
      //var instance = new ElasticEmail.SubaccountEmailSettings();
      //expect(instance).to.be();
    });

    it('should have the property maxContacts (base name: "MaxContacts")', function() {
      // uncomment below and update the code to test the property maxContacts
      //var instance = new ElasticEmail.SubaccountEmailSettings();
      //expect(instance).to.be();
    });

    it('should have the property enablePrivateIPPurchase (base name: "EnablePrivateIPPurchase")', function() {
      // uncomment below and update the code to test the property enablePrivateIPPurchase
      //var instance = new ElasticEmail.SubaccountEmailSettings();
      //expect(instance).to.be();
    });

    it('should have the property poolName (base name: "PoolName")', function() {
      // uncomment below and update the code to test the property poolName
      //var instance = new ElasticEmail.SubaccountEmailSettings();
      //expect(instance).to.be();
    });

    it('should have the property validSenderDomainOnly (base name: "ValidSenderDomainOnly")', function() {
      // uncomment below and update the code to test the property validSenderDomainOnly
      //var instance = new ElasticEmail.SubaccountEmailSettings();
      //expect(instance).to.be();
    });

  });

}));
