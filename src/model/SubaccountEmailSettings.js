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
 * The SubaccountEmailSettings model module.
 * @module model/SubaccountEmailSettings
 * @version 4.0.16
 */
class SubaccountEmailSettings {
    /**
     * Constructs a new <code>SubaccountEmailSettings</code>.
     * Settings related to sending emails
     * @alias module:model/SubaccountEmailSettings
     */
    constructor() { 
        
        SubaccountEmailSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubaccountEmailSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubaccountEmailSettings} obj Optional instance to populate.
     * @return {module:model/SubaccountEmailSettings} The populated <code>SubaccountEmailSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubaccountEmailSettings();

            if (data.hasOwnProperty('MonthlyRefillCredits')) {
                obj['MonthlyRefillCredits'] = ApiClient.convertToType(data['MonthlyRefillCredits'], 'Number');
            }
            if (data.hasOwnProperty('RequiresEmailCredits')) {
                obj['RequiresEmailCredits'] = ApiClient.convertToType(data['RequiresEmailCredits'], 'Boolean');
            }
            if (data.hasOwnProperty('EmailSizeLimit')) {
                obj['EmailSizeLimit'] = ApiClient.convertToType(data['EmailSizeLimit'], 'Number');
            }
            if (data.hasOwnProperty('DailySendLimit')) {
                obj['DailySendLimit'] = ApiClient.convertToType(data['DailySendLimit'], 'Number');
            }
            if (data.hasOwnProperty('MaxContacts')) {
                obj['MaxContacts'] = ApiClient.convertToType(data['MaxContacts'], 'Number');
            }
            if (data.hasOwnProperty('EnablePrivateIPPurchase')) {
                obj['EnablePrivateIPPurchase'] = ApiClient.convertToType(data['EnablePrivateIPPurchase'], 'Boolean');
            }
            if (data.hasOwnProperty('PoolName')) {
                obj['PoolName'] = ApiClient.convertToType(data['PoolName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Amount of credits added to Account automatically
 * @member {Number} MonthlyRefillCredits
 */
SubaccountEmailSettings.prototype['MonthlyRefillCredits'] = undefined;

/**
 * True, if Account needs credits to send emails. Otherwise, false
 * @member {Boolean} RequiresEmailCredits
 */
SubaccountEmailSettings.prototype['RequiresEmailCredits'] = undefined;

/**
 * Maximum size of email including attachments in MB's
 * @member {Number} EmailSizeLimit
 */
SubaccountEmailSettings.prototype['EmailSizeLimit'] = undefined;

/**
 * Amount of emails Account can send daily
 * @member {Number} DailySendLimit
 */
SubaccountEmailSettings.prototype['DailySendLimit'] = undefined;

/**
 * Maximum number of contacts the Account can have. 0 means that parent account's limit is used.
 * @member {Number} MaxContacts
 */
SubaccountEmailSettings.prototype['MaxContacts'] = undefined;

/**
 * Can the SubAccount purchase Private IP for themselves
 * @member {Boolean} EnablePrivateIPPurchase
 */
SubaccountEmailSettings.prototype['EnablePrivateIPPurchase'] = undefined;

/**
 * Name of your custom IP Pool to be used in the sending process
 * @member {String} PoolName
 */
SubaccountEmailSettings.prototype['PoolName'] = undefined;






export default SubaccountEmailSettings;

