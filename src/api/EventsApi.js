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
import CompressionFormat from '../model/CompressionFormat';
import EventType from '../model/EventType';
import EventsOrderBy from '../model/EventsOrderBy';
import ExportFileFormats from '../model/ExportFileFormats';
import ExportLink from '../model/ExportLink';
import ExportStatus from '../model/ExportStatus';
import RecipientEvent from '../model/RecipientEvent';

/**
* Events service.
* @module api/EventsApi
* @version 4.0.18
*/
export default class EventsApi {

    /**
    * Constructs a new EventsApi. 
    * @alias module:api/EventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the eventsByTransactionidGet operation.
     * @callback module:api/EventsApi~eventsByTransactionidGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RecipientEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Email Events
     * Returns a log of delivery events for the specific transaction ID. Required Access Level: ViewReports
     * @param {String} transactionid ID number of transaction
     * @param {Object} opts Optional parameters
     * @param {Date} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Date} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:model/EventsOrderBy} opts.orderBy 
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/EventsApi~eventsByTransactionidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RecipientEvent>}
     */
    eventsByTransactionidGet(transactionid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'transactionid' is set
      if (transactionid === undefined || transactionid === null) {
        throw new Error("Missing the required parameter 'transactionid' when calling eventsByTransactionidGet");
      }

      let pathParams = {
        'transactionid': transactionid
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'orderBy': opts['orderBy'],
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
      let returnType = [RecipientEvent];
      return this.apiClient.callApi(
        '/events/{transactionid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the eventsChannelsByNameExportPost operation.
     * @callback module:api/EventsApi~eventsChannelsByNameExportPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export Channel Events
     * Export delivery events log information to the specified file format. Required Access Level: Export
     * @param {String} name Name of selected channel.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/EventType>} opts.eventTypes Types of Events to return
     * @param {Date} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Date} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:model/ExportFileFormats} opts.fileFormat Format of the exported file
     * @param {module:model/CompressionFormat} opts.compressionFormat FileResponse compression format. None or Zip.
     * @param {String} opts.fileName Name of your file including extension.
     * @param {module:api/EventsApi~eventsChannelsByNameExportPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportLink}
     */
    eventsChannelsByNameExportPost(name, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling eventsChannelsByNameExportPost");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
        'eventTypes': this.apiClient.buildCollectionParam(opts['eventTypes'], 'multi'),
        'from': opts['from'],
        'to': opts['to'],
        'fileFormat': opts['fileFormat'],
        'compressionFormat': opts['compressionFormat'],
        'fileName': opts['fileName']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ExportLink;
      return this.apiClient.callApi(
        '/events/channels/{name}/export', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the eventsChannelsByNameGet operation.
     * @callback module:api/EventsApi~eventsChannelsByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RecipientEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Channel Events
     * Returns a log of delivery events filtered by specified parameters. Required Access Level: ViewReports
     * @param {String} name Name of selected channel.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/EventType>} opts.eventTypes Types of Events to return
     * @param {Date} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Date} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:model/EventsOrderBy} opts.orderBy 
     * @param {Number} opts.limit How many items to load. Maximum for this request is 1000 items
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/EventsApi~eventsChannelsByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RecipientEvent>}
     */
    eventsChannelsByNameGet(name, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling eventsChannelsByNameGet");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
        'eventTypes': this.apiClient.buildCollectionParam(opts['eventTypes'], 'multi'),
        'from': opts['from'],
        'to': opts['to'],
        'orderBy': opts['orderBy'],
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
      let returnType = [RecipientEvent];
      return this.apiClient.callApi(
        '/events/channels/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the eventsChannelsExportByIdStatusGet operation.
     * @callback module:api/EventsApi~eventsChannelsExportByIdStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check Channel Export Status
     * Check the current status of the channel export. Required Access Level: Export
     * @param {String} id ID of the exported file
     * @param {module:api/EventsApi~eventsChannelsExportByIdStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportStatus}
     */
    eventsChannelsExportByIdStatusGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsChannelsExportByIdStatusGet");
      }

      let pathParams = {
        'id': id
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
      let returnType = ExportStatus;
      return this.apiClient.callApi(
        '/events/channels/export/{id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the eventsExportByIdStatusGet operation.
     * @callback module:api/EventsApi~eventsExportByIdStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check Export Status
     * Check the current status of the export. Required Access Level: Export
     * @param {String} id ID of the exported file
     * @param {module:api/EventsApi~eventsExportByIdStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportStatus}
     */
    eventsExportByIdStatusGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsExportByIdStatusGet");
      }

      let pathParams = {
        'id': id
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
      let returnType = ExportStatus;
      return this.apiClient.callApi(
        '/events/export/{id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the eventsExportPost operation.
     * @callback module:api/EventsApi~eventsExportPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export Events
     * Export delivery events log information to the specified file format. Required Access Level: Export
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/EventType>} opts.eventTypes Types of Events to return
     * @param {Date} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Date} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:model/ExportFileFormats} opts.fileFormat Format of the exported file
     * @param {module:model/CompressionFormat} opts.compressionFormat FileResponse compression format. None or Zip.
     * @param {String} opts.fileName Name of your file including extension.
     * @param {module:api/EventsApi~eventsExportPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportLink}
     */
    eventsExportPost(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'eventTypes': this.apiClient.buildCollectionParam(opts['eventTypes'], 'multi'),
        'from': opts['from'],
        'to': opts['to'],
        'fileFormat': opts['fileFormat'],
        'compressionFormat': opts['compressionFormat'],
        'fileName': opts['fileName']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ExportLink;
      return this.apiClient.callApi(
        '/events/export', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the eventsGet operation.
     * @callback module:api/EventsApi~eventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RecipientEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Events
     * Returns a log of delivery events filtered by specified parameters. Required Access Level: ViewReports
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/EventType>} opts.eventTypes Types of Events to return
     * @param {Date} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Date} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:model/EventsOrderBy} opts.orderBy 
     * @param {Number} opts.limit How many items to load. Maximum for this request is 1000 items
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/EventsApi~eventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RecipientEvent>}
     */
    eventsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'eventTypes': this.apiClient.buildCollectionParam(opts['eventTypes'], 'multi'),
        'from': opts['from'],
        'to': opts['to'],
        'orderBy': opts['orderBy'],
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
      let returnType = [RecipientEvent];
      return this.apiClient.callApi(
        '/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
