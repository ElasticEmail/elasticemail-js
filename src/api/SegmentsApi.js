/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    The API has a limit of 20 concurrent connections and a hard timeout of 600 seconds per request.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    This is the documentation for REST API. If you’d like to read our legacy documentation regarding Web API v2 click <a target=\"_blank\" href=\"https://api.elasticemail.com/public/help\">here</a>.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: support@elasticemail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Segment from '../model/Segment';
import SegmentPayload from '../model/SegmentPayload';

/**
* Segments service.
* @module api/SegmentsApi
* @version 4.0.15
*/
export default class SegmentsApi {

    /**
    * Constructs a new SegmentsApi. 
    * @alias module:api/SegmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the segmentsByNameDelete operation.
     * @callback module:api/SegmentsApi~segmentsByNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Segment
     * Delete an existing segment. Required Access Level: ModifyContacts
     * @param {String} name Name of your segment.
     * @param {module:api/SegmentsApi~segmentsByNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    segmentsByNameDelete(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling segmentsByNameDelete");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/segments/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the segmentsByNameGet operation.
     * @callback module:api/SegmentsApi~segmentsByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Segment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Segment
     * Returns details for the specified segment. Required Access Level: ViewContacts
     * @param {String} name Name of the segment you want to load. Will load all contacts if the 'All Contacts' name has been provided
     * @param {module:api/SegmentsApi~segmentsByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Segment}
     */
    segmentsByNameGet(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling segmentsByNameGet");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Segment;
      return this.apiClient.callApi(
        '/segments/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the segmentsByNamePut operation.
     * @callback module:api/SegmentsApi~segmentsByNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Segment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Segment
     * Rename or change RULE for your segment. Required Access Level: ModifyContacts
     * @param {String} name Name of your segment.
     * @param {module:model/SegmentPayload} segmentPayload 
     * @param {module:api/SegmentsApi~segmentsByNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Segment}
     */
    segmentsByNamePut(name, segmentPayload, callback) {
      let postBody = segmentPayload;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling segmentsByNamePut");
      }
      // verify the required parameter 'segmentPayload' is set
      if (segmentPayload === undefined || segmentPayload === null) {
        throw new Error("Missing the required parameter 'segmentPayload' when calling segmentsByNamePut");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Segment;
      return this.apiClient.callApi(
        '/segments/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the segmentsGet operation.
     * @callback module:api/SegmentsApi~segmentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Segment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Segments
     * Returns a list of all your available Segments. Required Access Level: ViewContacts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/SegmentsApi~segmentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Segment>}
     */
    segmentsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Segment];
      return this.apiClient.callApi(
        '/segments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the segmentsPost operation.
     * @callback module:api/SegmentsApi~segmentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Segment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Segment
     * Add a new segment, based on specified RULE. Required Access Level: ModifyContacts
     * @param {module:model/SegmentPayload} segmentPayload 
     * @param {module:api/SegmentsApi~segmentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Segment}
     */
    segmentsPost(segmentPayload, callback) {
      let postBody = segmentPayload;
      // verify the required parameter 'segmentPayload' is set
      if (segmentPayload === undefined || segmentPayload === null) {
        throw new Error("Missing the required parameter 'segmentPayload' when calling segmentsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Segment;
      return this.apiClient.callApi(
        '/segments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
