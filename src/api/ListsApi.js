/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    The API has a limit of 20 concurrent connections and a hard timeout of 600 seconds per request.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
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
import ContactsList from '../model/ContactsList';
import EmailsPayload from '../model/EmailsPayload';
import ListPayload from '../model/ListPayload';
import ListUpdatePayload from '../model/ListUpdatePayload';

/**
* Lists service.
* @module api/ListsApi
* @version 4.0.18
*/
export default class ListsApi {

    /**
    * Constructs a new ListsApi. 
    * @alias module:api/ListsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listsByNameContactsPost operation.
     * @callback module:api/ListsApi~listsByNameContactsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactsList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Contacts to List
     * Add existing Contacts to specified list. Required Access Level: ModifyContacts
     * @param {String} name Name of your list.
     * @param {module:model/EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
     * @param {module:api/ListsApi~listsByNameContactsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactsList}
     */
    listsByNameContactsPost(name, emailsPayload, callback) {
      let postBody = emailsPayload;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listsByNameContactsPost");
      }
      // verify the required parameter 'emailsPayload' is set
      if (emailsPayload === undefined || emailsPayload === null) {
        throw new Error("Missing the required parameter 'emailsPayload' when calling listsByNameContactsPost");
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
      let returnType = ContactsList;
      return this.apiClient.callApi(
        '/lists/{name}/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listsByNameContactsRemovePost operation.
     * @callback module:api/ListsApi~listsByNameContactsRemovePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Contacts from List
     * Remove specified Contacts from your list. Required Access Level: ModifyContacts
     * @param {String} name Name of your list.
     * @param {module:model/EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
     * @param {module:api/ListsApi~listsByNameContactsRemovePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    listsByNameContactsRemovePost(name, emailsPayload, callback) {
      let postBody = emailsPayload;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listsByNameContactsRemovePost");
      }
      // verify the required parameter 'emailsPayload' is set
      if (emailsPayload === undefined || emailsPayload === null) {
        throw new Error("Missing the required parameter 'emailsPayload' when calling listsByNameContactsRemovePost");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/lists/{name}/contacts/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listsByNameDelete operation.
     * @callback module:api/ListsApi~listsByNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete List
     * Deletes List and removes all the Contacts from it (does not delete Contacts). Required Access Level: ModifyContacts
     * @param {String} name Name of your list.
     * @param {module:api/ListsApi~listsByNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    listsByNameDelete(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listsByNameDelete");
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
        '/lists/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listsByNameGet operation.
     * @callback module:api/ListsApi~listsByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactsList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load List
     * Returns detailed information about specified list. Required Access Level: ViewContacts
     * @param {String} name Name of your list.
     * @param {module:api/ListsApi~listsByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactsList}
     */
    listsByNameGet(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listsByNameGet");
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
      let returnType = ContactsList;
      return this.apiClient.callApi(
        '/lists/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listsByNamePut operation.
     * @callback module:api/ListsApi~listsByNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactsList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update List
     * Update existing list. Required Access Level: ModifyContacts
     * @param {String} name Name of your list.
     * @param {module:model/ListUpdatePayload} listUpdatePayload 
     * @param {module:api/ListsApi~listsByNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactsList}
     */
    listsByNamePut(name, listUpdatePayload, callback) {
      let postBody = listUpdatePayload;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listsByNamePut");
      }
      // verify the required parameter 'listUpdatePayload' is set
      if (listUpdatePayload === undefined || listUpdatePayload === null) {
        throw new Error("Missing the required parameter 'listUpdatePayload' when calling listsByNamePut");
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
      let returnType = ContactsList;
      return this.apiClient.callApi(
        '/lists/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listsGet operation.
     * @callback module:api/ListsApi~listsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContactsList>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Lists
     * Returns all your existing lists. Required Access Level: ViewContacts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/ListsApi~listsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContactsList>}
     */
    listsGet(opts, callback) {
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
      let returnType = [ContactsList];
      return this.apiClient.callApi(
        '/lists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listsPost operation.
     * @callback module:api/ListsApi~listsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactsList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add List
     * Add a new list. Required Access Level: ModifyContacts
     * @param {module:model/ListPayload} listPayload 
     * @param {module:api/ListsApi~listsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactsList}
     */
    listsPost(listPayload, callback) {
      let postBody = listPayload;
      // verify the required parameter 'listPayload' is set
      if (listPayload === undefined || listPayload === null) {
        throw new Error("Missing the required parameter 'listPayload' when calling listsPost");
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
      let returnType = ContactsList;
      return this.apiClient.callApi(
        '/lists', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
