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
import ChannelLogStatusSummary from '../model/ChannelLogStatusSummary';
import LogStatusSummary from '../model/LogStatusSummary';

/**
* Statistics service.
* @module api/StatisticsApi
* @version 4.0.25
*/
export default class StatisticsApi {

    /**
    * Constructs a new StatisticsApi. 
    * @alias module:api/StatisticsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the statisticsCampaignsByNameGet operation.
     * @callback module:api/StatisticsApi~statisticsCampaignsByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChannelLogStatusSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Campaign Stats
     * Retrieve stats of an existing campaign. Required Access Level: ViewChannels
     * @param {String} name The name of the campaign to get.
     * @param {module:api/StatisticsApi~statisticsCampaignsByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChannelLogStatusSummary}
     */
    statisticsCampaignsByNameGet(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling statisticsCampaignsByNameGet");
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
      let returnType = ChannelLogStatusSummary;
      return this.apiClient.callApi(
        '/statistics/campaigns/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the statisticsCampaignsGet operation.
     * @callback module:api/StatisticsApi~statisticsCampaignsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ChannelLogStatusSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Campaigns Stats
     * Returns a list of your Campaigns' stats. Required Access Level: ViewChannels
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] Maximum number of returned items.
     * @param {Number} [offset] How many items should be returned ahead.
     * @param {module:api/StatisticsApi~statisticsCampaignsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ChannelLogStatusSummary>}
     */
    statisticsCampaignsGet(opts, callback) {
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
      let returnType = [ChannelLogStatusSummary];
      return this.apiClient.callApi(
        '/statistics/campaigns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the statisticsChannelsByNameGet operation.
     * @callback module:api/StatisticsApi~statisticsChannelsByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChannelLogStatusSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Channel Stats
     * Retrieve an existing channel stats. Required Access Level: ViewChannels
     * @param {String} name The name of the channel to get.
     * @param {module:api/StatisticsApi~statisticsChannelsByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChannelLogStatusSummary}
     */
    statisticsChannelsByNameGet(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling statisticsChannelsByNameGet");
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
      let returnType = ChannelLogStatusSummary;
      return this.apiClient.callApi(
        '/statistics/channels/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the statisticsChannelsGet operation.
     * @callback module:api/StatisticsApi~statisticsChannelsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ChannelLogStatusSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Channels Stats
     * Returns a list of your Channels' stats. Required Access Level: ViewChannels
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] Maximum number of returned items.
     * @param {Number} [offset] How many items should be returned ahead.
     * @param {module:api/StatisticsApi~statisticsChannelsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ChannelLogStatusSummary>}
     */
    statisticsChannelsGet(opts, callback) {
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
      let returnType = [ChannelLogStatusSummary];
      return this.apiClient.callApi(
        '/statistics/channels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the statisticsGet operation.
     * @callback module:api/StatisticsApi~statisticsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogStatusSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Statistics
     * Returns basic statistics. Required Access Level: ViewReports
     * @param {Date} from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Object} opts Optional parameters
     * @param {Date} [to] Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:api/StatisticsApi~statisticsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogStatusSummary}
     */
    statisticsGet(from, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling statisticsGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'from': from,
        'to': opts['to']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LogStatusSummary;
      return this.apiClient.callApi(
        '/statistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
