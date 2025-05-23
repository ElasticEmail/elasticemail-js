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

import ApiClient from '../ApiClient';
import EmailJobFailedStatus from './EmailJobFailedStatus';

/**
 * The EmailJobStatus model module.
 * @module model/EmailJobStatus
 * @version 4.0.26
 */
class EmailJobStatus {
    /**
     * Constructs a new <code>EmailJobStatus</code>.
     * @alias module:model/EmailJobStatus
     */
    constructor() { 
        
        EmailJobStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailJobStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailJobStatus} obj Optional instance to populate.
     * @return {module:model/EmailJobStatus} The populated <code>EmailJobStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailJobStatus();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
            if (data.hasOwnProperty('RecipientsCount')) {
                obj['RecipientsCount'] = ApiClient.convertToType(data['RecipientsCount'], 'Number');
            }
            if (data.hasOwnProperty('Failed')) {
                obj['Failed'] = ApiClient.convertToType(data['Failed'], [EmailJobFailedStatus]);
            }
            if (data.hasOwnProperty('FailedCount')) {
                obj['FailedCount'] = ApiClient.convertToType(data['FailedCount'], 'Number');
            }
            if (data.hasOwnProperty('Sent')) {
                obj['Sent'] = ApiClient.convertToType(data['Sent'], ['String']);
            }
            if (data.hasOwnProperty('SentCount')) {
                obj['SentCount'] = ApiClient.convertToType(data['SentCount'], 'Number');
            }
            if (data.hasOwnProperty('Delivered')) {
                obj['Delivered'] = ApiClient.convertToType(data['Delivered'], ['String']);
            }
            if (data.hasOwnProperty('DeliveredCount')) {
                obj['DeliveredCount'] = ApiClient.convertToType(data['DeliveredCount'], 'Number');
            }
            if (data.hasOwnProperty('Pending')) {
                obj['Pending'] = ApiClient.convertToType(data['Pending'], ['String']);
            }
            if (data.hasOwnProperty('PendingCount')) {
                obj['PendingCount'] = ApiClient.convertToType(data['PendingCount'], 'Number');
            }
            if (data.hasOwnProperty('Opened')) {
                obj['Opened'] = ApiClient.convertToType(data['Opened'], ['String']);
            }
            if (data.hasOwnProperty('OpenedCount')) {
                obj['OpenedCount'] = ApiClient.convertToType(data['OpenedCount'], 'Number');
            }
            if (data.hasOwnProperty('Clicked')) {
                obj['Clicked'] = ApiClient.convertToType(data['Clicked'], ['String']);
            }
            if (data.hasOwnProperty('ClickedCount')) {
                obj['ClickedCount'] = ApiClient.convertToType(data['ClickedCount'], 'Number');
            }
            if (data.hasOwnProperty('Unsubscribed')) {
                obj['Unsubscribed'] = ApiClient.convertToType(data['Unsubscribed'], ['String']);
            }
            if (data.hasOwnProperty('UnsubscribedCount')) {
                obj['UnsubscribedCount'] = ApiClient.convertToType(data['UnsubscribedCount'], 'Number');
            }
            if (data.hasOwnProperty('AbuseReports')) {
                obj['AbuseReports'] = ApiClient.convertToType(data['AbuseReports'], ['String']);
            }
            if (data.hasOwnProperty('AbuseReportsCount')) {
                obj['AbuseReportsCount'] = ApiClient.convertToType(data['AbuseReportsCount'], 'Number');
            }
            if (data.hasOwnProperty('MessageIDs')) {
                obj['MessageIDs'] = ApiClient.convertToType(data['MessageIDs'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailJobStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailJobStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ID'] && !(typeof data['ID'] === 'string' || data['ID'] instanceof String)) {
            throw new Error("Expected the field `ID` to be a primitive type in the JSON string but got " + data['ID']);
        }
        // ensure the json data is a string
        if (data['Status'] && !(typeof data['Status'] === 'string' || data['Status'] instanceof String)) {
            throw new Error("Expected the field `Status` to be a primitive type in the JSON string but got " + data['Status']);
        }
        if (data['Failed']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Failed'])) {
                throw new Error("Expected the field `Failed` to be an array in the JSON data but got " + data['Failed']);
            }
            // validate the optional field `Failed` (array)
            for (const item of data['Failed']) {
                EmailJobFailedStatus.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Sent'])) {
            throw new Error("Expected the field `Sent` to be an array in the JSON data but got " + data['Sent']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Delivered'])) {
            throw new Error("Expected the field `Delivered` to be an array in the JSON data but got " + data['Delivered']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Pending'])) {
            throw new Error("Expected the field `Pending` to be an array in the JSON data but got " + data['Pending']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Opened'])) {
            throw new Error("Expected the field `Opened` to be an array in the JSON data but got " + data['Opened']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Clicked'])) {
            throw new Error("Expected the field `Clicked` to be an array in the JSON data but got " + data['Clicked']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Unsubscribed'])) {
            throw new Error("Expected the field `Unsubscribed` to be an array in the JSON data but got " + data['Unsubscribed']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['AbuseReports'])) {
            throw new Error("Expected the field `AbuseReports` to be an array in the JSON data but got " + data['AbuseReports']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['MessageIDs'])) {
            throw new Error("Expected the field `MessageIDs` to be an array in the JSON data but got " + data['MessageIDs']);
        }

        return true;
    }


}



/**
 * ID number of your attachment
 * @member {String} ID
 */
EmailJobStatus.prototype['ID'] = undefined;

/**
 * Name of status: submitted, complete, in_progress
 * @member {String} Status
 */
EmailJobStatus.prototype['Status'] = undefined;

/**
 * @member {Number} RecipientsCount
 */
EmailJobStatus.prototype['RecipientsCount'] = undefined;

/**
 * @member {Array.<module:model/EmailJobFailedStatus>} Failed
 */
EmailJobStatus.prototype['Failed'] = undefined;

/**
 * Total emails failed.
 * @member {Number} FailedCount
 */
EmailJobStatus.prototype['FailedCount'] = undefined;

/**
 * @member {Array.<String>} Sent
 */
EmailJobStatus.prototype['Sent'] = undefined;

/**
 * Total emails sent.
 * @member {Number} SentCount
 */
EmailJobStatus.prototype['SentCount'] = undefined;

/**
 * Number of delivered messages
 * @member {Array.<String>} Delivered
 */
EmailJobStatus.prototype['Delivered'] = undefined;

/**
 * @member {Number} DeliveredCount
 */
EmailJobStatus.prototype['DeliveredCount'] = undefined;

/**
 * @member {Array.<String>} Pending
 */
EmailJobStatus.prototype['Pending'] = undefined;

/**
 * @member {Number} PendingCount
 */
EmailJobStatus.prototype['PendingCount'] = undefined;

/**
 * Number of opened messages
 * @member {Array.<String>} Opened
 */
EmailJobStatus.prototype['Opened'] = undefined;

/**
 * Total emails opened.
 * @member {Number} OpenedCount
 */
EmailJobStatus.prototype['OpenedCount'] = undefined;

/**
 * Number of clicked messages
 * @member {Array.<String>} Clicked
 */
EmailJobStatus.prototype['Clicked'] = undefined;

/**
 * Total emails clicked
 * @member {Number} ClickedCount
 */
EmailJobStatus.prototype['ClickedCount'] = undefined;

/**
 * Number of unsubscribed messages
 * @member {Array.<String>} Unsubscribed
 */
EmailJobStatus.prototype['Unsubscribed'] = undefined;

/**
 * Total emails unsubscribed
 * @member {Number} UnsubscribedCount
 */
EmailJobStatus.prototype['UnsubscribedCount'] = undefined;

/**
 * @member {Array.<String>} AbuseReports
 */
EmailJobStatus.prototype['AbuseReports'] = undefined;

/**
 * @member {Number} AbuseReportsCount
 */
EmailJobStatus.prototype['AbuseReportsCount'] = undefined;

/**
 * List of all MessageIDs for this job.
 * @member {Array.<String>} MessageIDs
 */
EmailJobStatus.prototype['MessageIDs'] = undefined;






export default EmailJobStatus;

