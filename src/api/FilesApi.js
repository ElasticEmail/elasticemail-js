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


import ApiClient from "../ApiClient";
import FileInfo from '../model/FileInfo';
import FilePayload from '../model/FilePayload';

/**
* Files service.
* @module api/FilesApi
* @version 4.0.23
*/
export default class FilesApi {

    /**
    * Constructs a new FilesApi. 
    * @alias module:api/FilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the filesByNameDelete operation.
     * @callback module:api/FilesApi~filesByNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete File
     * Permanently deletes the file from your Account. Required Access Level: ModifyFiles
     * @param {String} name Name of your file including extension.
     * @param {module:api/FilesApi~filesByNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    filesByNameDelete(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling filesByNameDelete");
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
        '/files/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filesByNameGet operation.
     * @callback module:api/FilesApi~filesByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download File
     * Gets content of the specified File. Required Access Level: ViewFiles
     * @param {String} name Name of your file including extension.
     * @param {module:api/FilesApi~filesByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    filesByNameGet(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling filesByNameGet");
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
      let accepts = ['application/*'];
      let returnType = File;
      return this.apiClient.callApi(
        '/files/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filesByNameInfoGet operation.
     * @callback module:api/FilesApi~filesByNameInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load File Details
     * Returns the specified File's details. Required Access Level: ViewFiles
     * @param {String} name Name of your file including extension.
     * @param {module:api/FilesApi~filesByNameInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileInfo}
     */
    filesByNameInfoGet(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling filesByNameInfoGet");
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
      let returnType = FileInfo;
      return this.apiClient.callApi(
        '/files/{name}/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filesGet operation.
     * @callback module:api/FilesApi~filesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FileInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Files
     * Returns a list of all your available files. Required Access Level: ViewFiles
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/FilesApi~filesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FileInfo>}
     */
    filesGet(opts, callback) {
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
      let returnType = [FileInfo];
      return this.apiClient.callApi(
        '/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filesPost operation.
     * @callback module:api/FilesApi~filesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload File
     * Uploads selected file to the server. Required Access Level: ModifyFiles
     * @param {module:model/FilePayload} filePayload 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.expiresAfterDays After how many days should the file be deleted.
     * @param {module:api/FilesApi~filesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileInfo}
     */
    filesPost(filePayload, opts, callback) {
      opts = opts || {};
      let postBody = filePayload;
      // verify the required parameter 'filePayload' is set
      if (filePayload === undefined || filePayload === null) {
        throw new Error("Missing the required parameter 'filePayload' when calling filesPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'expiresAfterDays': opts['expiresAfterDays']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = FileInfo;
      return this.apiClient.callApi(
        '/files', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
