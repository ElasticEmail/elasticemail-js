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
import LogJobStatus from './LogJobStatus';

/**
 * The EmailStatus model module.
 * @module model/EmailStatus
 * @version 4.0.23
 */
class EmailStatus {
    /**
     * Constructs a new <code>EmailStatus</code>.
     * Status information of the specified email
     * @alias module:model/EmailStatus
     */
    constructor() { 
        
        EmailStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailStatus} obj Optional instance to populate.
     * @return {module:model/EmailStatus} The populated <code>EmailStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailStatus();

            if (data.hasOwnProperty('From')) {
                obj['From'] = ApiClient.convertToType(data['From'], 'String');
            }
            if (data.hasOwnProperty('To')) {
                obj['To'] = ApiClient.convertToType(data['To'], 'String');
            }
            if (data.hasOwnProperty('Date')) {
                obj['Date'] = ApiClient.convertToType(data['Date'], 'Date');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = LogJobStatus.constructFromObject(data['Status']);
            }
            if (data.hasOwnProperty('StatusName')) {
                obj['StatusName'] = ApiClient.convertToType(data['StatusName'], 'String');
            }
            if (data.hasOwnProperty('StatusChangeDate')) {
                obj['StatusChangeDate'] = ApiClient.convertToType(data['StatusChangeDate'], 'Date');
            }
            if (data.hasOwnProperty('DateSent')) {
                obj['DateSent'] = ApiClient.convertToType(data['DateSent'], 'Date');
            }
            if (data.hasOwnProperty('DateOpened')) {
                obj['DateOpened'] = ApiClient.convertToType(data['DateOpened'], 'Date');
            }
            if (data.hasOwnProperty('DateClicked')) {
                obj['DateClicked'] = ApiClient.convertToType(data['DateClicked'], 'Date');
            }
            if (data.hasOwnProperty('ErrorMessage')) {
                obj['ErrorMessage'] = ApiClient.convertToType(data['ErrorMessage'], 'String');
            }
            if (data.hasOwnProperty('TransactionID')) {
                obj['TransactionID'] = ApiClient.convertToType(data['TransactionID'], 'String');
            }
            if (data.hasOwnProperty('EnvelopeFrom')) {
                obj['EnvelopeFrom'] = ApiClient.convertToType(data['EnvelopeFrom'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['From'] && !(typeof data['From'] === 'string' || data['From'] instanceof String)) {
            throw new Error("Expected the field `From` to be a primitive type in the JSON string but got " + data['From']);
        }
        // ensure the json data is a string
        if (data['To'] && !(typeof data['To'] === 'string' || data['To'] instanceof String)) {
            throw new Error("Expected the field `To` to be a primitive type in the JSON string but got " + data['To']);
        }
        // ensure the json data is a string
        if (data['StatusName'] && !(typeof data['StatusName'] === 'string' || data['StatusName'] instanceof String)) {
            throw new Error("Expected the field `StatusName` to be a primitive type in the JSON string but got " + data['StatusName']);
        }
        // ensure the json data is a string
        if (data['ErrorMessage'] && !(typeof data['ErrorMessage'] === 'string' || data['ErrorMessage'] instanceof String)) {
            throw new Error("Expected the field `ErrorMessage` to be a primitive type in the JSON string but got " + data['ErrorMessage']);
        }
        // ensure the json data is a string
        if (data['TransactionID'] && !(typeof data['TransactionID'] === 'string' || data['TransactionID'] instanceof String)) {
            throw new Error("Expected the field `TransactionID` to be a primitive type in the JSON string but got " + data['TransactionID']);
        }
        // ensure the json data is a string
        if (data['EnvelopeFrom'] && !(typeof data['EnvelopeFrom'] === 'string' || data['EnvelopeFrom'] instanceof String)) {
            throw new Error("Expected the field `EnvelopeFrom` to be a primitive type in the JSON string but got " + data['EnvelopeFrom']);
        }

        return true;
    }


}



/**
 * Email address this email was sent from.
 * @member {String} From
 */
EmailStatus.prototype['From'] = undefined;

/**
 * Email address this email was sent to.
 * @member {String} To
 */
EmailStatus.prototype['To'] = undefined;

/**
 * Date the email was submitted.
 * @member {Date} Date
 */
EmailStatus.prototype['Date'] = undefined;

/**
 * @member {module:model/LogJobStatus} Status
 */
EmailStatus.prototype['Status'] = undefined;

/**
 * Name of email's status
 * @member {String} StatusName
 */
EmailStatus.prototype['StatusName'] = undefined;

/**
 * Date of last status change.
 * @member {Date} StatusChangeDate
 */
EmailStatus.prototype['StatusChangeDate'] = undefined;

/**
 * Date when the email was sent
 * @member {Date} DateSent
 */
EmailStatus.prototype['DateSent'] = undefined;

/**
 * Date when the email changed the status to 'opened'
 * @member {Date} DateOpened
 */
EmailStatus.prototype['DateOpened'] = undefined;

/**
 * Date when the email changed the status to 'clicked'
 * @member {Date} DateClicked
 */
EmailStatus.prototype['DateClicked'] = undefined;

/**
 * Detailed error or bounced message.
 * @member {String} ErrorMessage
 */
EmailStatus.prototype['ErrorMessage'] = undefined;

/**
 * ID number of transaction
 * @member {String} TransactionID
 */
EmailStatus.prototype['TransactionID'] = undefined;

/**
 * Envelope from address
 * @member {String} EnvelopeFrom
 */
EmailStatus.prototype['EnvelopeFrom'] = undefined;






export default EmailStatus;

