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
import SubaccountSettingsInfoPayload from './SubaccountSettingsInfoPayload';

/**
 * The SubaccountPayload model module.
 * @module model/SubaccountPayload
 * @version 4.0.15
 */
class SubaccountPayload {
    /**
     * Constructs a new <code>SubaccountPayload</code>.
     * New SubAccount payload
     * @alias module:model/SubaccountPayload
     * @param email {String} Proper email address.
     * @param password {String} Current password.
     */
    constructor(email, password) { 
        
        SubaccountPayload.initialize(this, email, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password) { 
        obj['Email'] = email;
        obj['Password'] = password;
    }

    /**
     * Constructs a <code>SubaccountPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubaccountPayload} obj Optional instance to populate.
     * @return {module:model/SubaccountPayload} The populated <code>SubaccountPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubaccountPayload();

            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('Password')) {
                obj['Password'] = ApiClient.convertToType(data['Password'], 'String');
            }
            if (data.hasOwnProperty('SendActivation')) {
                obj['SendActivation'] = ApiClient.convertToType(data['SendActivation'], 'Boolean');
            }
            if (data.hasOwnProperty('Settings')) {
                obj['Settings'] = ApiClient.convertToType(data['Settings'], SubaccountSettingsInfoPayload);
            }
        }
        return obj;
    }


}

/**
 * Proper email address.
 * @member {String} Email
 */
SubaccountPayload.prototype['Email'] = undefined;

/**
 * Current password.
 * @member {String} Password
 */
SubaccountPayload.prototype['Password'] = undefined;

/**
 * True, if you want to send activation email to this Account to confirm the creation of a new SubAccount. Otherwise, false (SubAccount will immediately be Active).
 * @member {Boolean} SendActivation
 */
SubaccountPayload.prototype['SendActivation'] = undefined;

/**
 * SubAccount settings
 * @member {module:model/SubaccountSettingsInfoPayload} Settings
 */
SubaccountPayload.prototype['Settings'] = undefined;






export default SubaccountPayload;

