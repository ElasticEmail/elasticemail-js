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
import EmailData from '../model/EmailData';
import EmailJobStatus from '../model/EmailJobStatus';
import EmailMessageData from '../model/EmailMessageData';
import EmailSend from '../model/EmailSend';
import EmailTransactionalMessageData from '../model/EmailTransactionalMessageData';
import MergeEmailPayload from '../model/MergeEmailPayload';

/**
* Emails service.
* @module api/EmailsApi
* @version 4.0.26
*/
export default class EmailsApi {

    /**
    * Constructs a new EmailsApi. 
    * @alias module:api/EmailsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the emailsByMsgidViewGet operation.
     * @callback module:api/EmailsApi~emailsByMsgidViewGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View Email
     * Returns email details for viewing or rendering. Required Access Level: None
     * @param {String} msgid Message identifier
     * @param {module:api/EmailsApi~emailsByMsgidViewGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailData}
     */
    emailsByMsgidViewGet(msgid, callback) {
      let postBody = null;
      // verify the required parameter 'msgid' is set
      if (msgid === undefined || msgid === null) {
        throw new Error("Missing the required parameter 'msgid' when calling emailsByMsgidViewGet");
      }

      let pathParams = {
        'msgid': msgid
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
      let returnType = EmailData;
      return this.apiClient.callApi(
        '/emails/{msgid}/view', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emailsByTransactionidStatusGet operation.
     * @callback module:api/EmailsApi~emailsByTransactionidStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Status
     * Get status details of an email transaction. Required Access Level: ViewReports
     * @param {String} transactionid Transaction identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} [showFailed = false)] Include Bounced email addresses.
     * @param {Boolean} [showSent = false)] Include Sent email addresses.
     * @param {Boolean} [showDelivered = false)] Include all delivered email addresses.
     * @param {Boolean} [showPending = false)] Include Ready to send email addresses.
     * @param {Boolean} [showOpened = false)] Include Opened email addresses.
     * @param {Boolean} [showClicked = false)] Include Clicked email addresses.
     * @param {Boolean} [showAbuse = false)] Include Reported as abuse email addresses.
     * @param {Boolean} [showUnsubscribed = false)] Include Unsubscribed email addresses.
     * @param {Boolean} [showErrors = false)] Include error messages for bounced emails.
     * @param {Boolean} [showMessageIDs = false)] Include all MessageIDs for this transaction
     * @param {module:api/EmailsApi~emailsByTransactionidStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailJobStatus}
     */
    emailsByTransactionidStatusGet(transactionid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'transactionid' is set
      if (transactionid === undefined || transactionid === null) {
        throw new Error("Missing the required parameter 'transactionid' when calling emailsByTransactionidStatusGet");
      }

      let pathParams = {
        'transactionid': transactionid
      };
      let queryParams = {
        'showFailed': opts['showFailed'],
        'showSent': opts['showSent'],
        'showDelivered': opts['showDelivered'],
        'showPending': opts['showPending'],
        'showOpened': opts['showOpened'],
        'showClicked': opts['showClicked'],
        'showAbuse': opts['showAbuse'],
        'showUnsubscribed': opts['showUnsubscribed'],
        'showErrors': opts['showErrors'],
        'showMessageIDs': opts['showMessageIDs']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EmailJobStatus;
      return this.apiClient.callApi(
        '/emails/{transactionid}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emailsMergefilePost operation.
     * @callback module:api/EmailsApi~emailsMergefilePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSend} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Bulk Emails CSV
     * Send to a list of contacts submitted in a CSV data file. The first column in the CSV must be the email address and the CSV must contain a header row. Additional fields can be included with a named header row and can be merged with the template using {merge} tags in the content.                           Example CSV:                           email, firstname, lastname              test1@gmail.com, michael, smith              test2@gmail.com, janet, smith                           Merge file must not be empty. Required Access Level: SendHttp
     * @param {module:model/MergeEmailPayload} mergeEmailPayload Email data
     * @param {module:api/EmailsApi~emailsMergefilePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSend}
     */
    emailsMergefilePost(mergeEmailPayload, callback) {
      let postBody = mergeEmailPayload;
      // verify the required parameter 'mergeEmailPayload' is set
      if (mergeEmailPayload === undefined || mergeEmailPayload === null) {
        throw new Error("Missing the required parameter 'mergeEmailPayload' when calling emailsMergefilePost");
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
      let returnType = EmailSend;
      return this.apiClient.callApi(
        '/emails/mergefile', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emailsPost operation.
     * @callback module:api/EmailsApi~emailsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSend} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Bulk Emails
     * Send bulk merge email. Required Access Level: SendHttp
     * @param {module:model/EmailMessageData} emailMessageData Email data
     * @param {module:api/EmailsApi~emailsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSend}
     */
    emailsPost(emailMessageData, callback) {
      let postBody = emailMessageData;
      // verify the required parameter 'emailMessageData' is set
      if (emailMessageData === undefined || emailMessageData === null) {
        throw new Error("Missing the required parameter 'emailMessageData' when calling emailsPost");
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
      let returnType = EmailSend;
      return this.apiClient.callApi(
        '/emails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emailsTransactionalPost operation.
     * @callback module:api/EmailsApi~emailsTransactionalPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSend} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Transactional Email
     * Send transactional emails (recipients will be known to each other). Required Access Level: SendHttp
     * @param {module:model/EmailTransactionalMessageData} emailTransactionalMessageData Email data
     * @param {module:api/EmailsApi~emailsTransactionalPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSend}
     */
    emailsTransactionalPost(emailTransactionalMessageData, callback) {
      let postBody = emailTransactionalMessageData;
      // verify the required parameter 'emailTransactionalMessageData' is set
      if (emailTransactionalMessageData === undefined || emailTransactionalMessageData === null) {
        throw new Error("Missing the required parameter 'emailTransactionalMessageData' when calling emailsTransactionalPost");
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
      let returnType = EmailSend;
      return this.apiClient.callApi(
        '/emails/transactional', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
