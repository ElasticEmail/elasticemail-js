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

import ApiClient from '../ApiClient';

/**
 * The ContactActivity model module.
 * @module model/ContactActivity
 * @version 4.0.16
 */
class ContactActivity {
    /**
     * Constructs a new <code>ContactActivity</code>.
     * @alias module:model/ContactActivity
     */
    constructor() { 
        
        ContactActivity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactActivity} obj Optional instance to populate.
     * @return {module:model/ContactActivity} The populated <code>ContactActivity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactActivity();

            if (data.hasOwnProperty('TotalSent')) {
                obj['TotalSent'] = ApiClient.convertToType(data['TotalSent'], 'Number');
            }
            if (data.hasOwnProperty('TotalOpened')) {
                obj['TotalOpened'] = ApiClient.convertToType(data['TotalOpened'], 'Number');
            }
            if (data.hasOwnProperty('TotalClicked')) {
                obj['TotalClicked'] = ApiClient.convertToType(data['TotalClicked'], 'Number');
            }
            if (data.hasOwnProperty('TotalFailed')) {
                obj['TotalFailed'] = ApiClient.convertToType(data['TotalFailed'], 'Number');
            }
            if (data.hasOwnProperty('LastSent')) {
                obj['LastSent'] = ApiClient.convertToType(data['LastSent'], 'Date');
            }
            if (data.hasOwnProperty('LastOpened')) {
                obj['LastOpened'] = ApiClient.convertToType(data['LastOpened'], 'Date');
            }
            if (data.hasOwnProperty('LastClicked')) {
                obj['LastClicked'] = ApiClient.convertToType(data['LastClicked'], 'Date');
            }
            if (data.hasOwnProperty('LastFailed')) {
                obj['LastFailed'] = ApiClient.convertToType(data['LastFailed'], 'Date');
            }
            if (data.hasOwnProperty('LastIP')) {
                obj['LastIP'] = ApiClient.convertToType(data['LastIP'], 'String');
            }
            if (data.hasOwnProperty('ErrorCode')) {
                obj['ErrorCode'] = ApiClient.convertToType(data['ErrorCode'], 'Number');
            }
            if (data.hasOwnProperty('FriendlyErrorMessage')) {
                obj['FriendlyErrorMessage'] = ApiClient.convertToType(data['FriendlyErrorMessage'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Total emails sent.
 * @member {Number} TotalSent
 */
ContactActivity.prototype['TotalSent'] = undefined;

/**
 * Total emails opened.
 * @member {Number} TotalOpened
 */
ContactActivity.prototype['TotalOpened'] = undefined;

/**
 * Total emails clicked
 * @member {Number} TotalClicked
 */
ContactActivity.prototype['TotalClicked'] = undefined;

/**
 * Total emails failed.
 * @member {Number} TotalFailed
 */
ContactActivity.prototype['TotalFailed'] = undefined;

/**
 * Last date when an email was sent to this contact
 * @member {Date} LastSent
 */
ContactActivity.prototype['LastSent'] = undefined;

/**
 * Date this contact last opened an email
 * @member {Date} LastOpened
 */
ContactActivity.prototype['LastOpened'] = undefined;

/**
 * Date this contact last clicked an email
 * @member {Date} LastClicked
 */
ContactActivity.prototype['LastClicked'] = undefined;

/**
 * Last date when an email sent to this contact bounced
 * @member {Date} LastFailed
 */
ContactActivity.prototype['LastFailed'] = undefined;

/**
 * IP from which this contact opened or clicked their email last time
 * @member {String} LastIP
 */
ContactActivity.prototype['LastIP'] = undefined;

/**
 * Last RFC Error code if any occurred
 * @member {Number} ErrorCode
 */
ContactActivity.prototype['ErrorCode'] = undefined;

/**
 * Last RFC error message if any occurred
 * @member {String} FriendlyErrorMessage
 */
ContactActivity.prototype['FriendlyErrorMessage'] = undefined;






export default ContactActivity;

