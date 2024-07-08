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
    instance = new ElasticEmail.ChannelLogStatusSummary();
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

  describe('ChannelLogStatusSummary', function() {
    it('should create an instance of ChannelLogStatusSummary', function() {
      // uncomment below and update the code to test ChannelLogStatusSummary
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be.a(ElasticEmail.ChannelLogStatusSummary);
    });

    it('should have the property channelName (base name: "ChannelName")', function() {
      // uncomment below and update the code to test the property channelName
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "Recipients")', function() {
      // uncomment below and update the code to test the property recipients
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property emailTotal (base name: "EmailTotal")', function() {
      // uncomment below and update the code to test the property emailTotal
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property smsTotal (base name: "SmsTotal")', function() {
      // uncomment below and update the code to test the property smsTotal
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property delivered (base name: "Delivered")', function() {
      // uncomment below and update the code to test the property delivered
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property bounced (base name: "Bounced")', function() {
      // uncomment below and update the code to test the property bounced
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property inProgress (base name: "InProgress")', function() {
      // uncomment below and update the code to test the property inProgress
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property opened (base name: "Opened")', function() {
      // uncomment below and update the code to test the property opened
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property clicked (base name: "Clicked")', function() {
      // uncomment below and update the code to test the property clicked
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribed (base name: "Unsubscribed")', function() {
      // uncomment below and update the code to test the property unsubscribed
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property complaints (base name: "Complaints")', function() {
      // uncomment below and update the code to test the property complaints
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property inbound (base name: "Inbound")', function() {
      // uncomment below and update the code to test the property inbound
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property manualCancel (base name: "ManualCancel")', function() {
      // uncomment below and update the code to test the property manualCancel
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property notDelivered (base name: "NotDelivered")', function() {
      // uncomment below and update the code to test the property notDelivered
      //var instance = new ElasticEmail.ChannelLogStatusSummary();
      //expect(instance).to.be();
    });

  });

}));
