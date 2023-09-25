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
import AccessLevel from './AccessLevel';

/**
 * The NewApiKey model module.
 * @module model/NewApiKey
 * @version 4.0.22
 */
class NewApiKey {
    /**
     * Constructs a new <code>NewApiKey</code>.
     * Newly generated ApiKey with Token
     * @alias module:model/NewApiKey
     */
    constructor() { 
        
        NewApiKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewApiKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewApiKey} obj Optional instance to populate.
     * @return {module:model/NewApiKey} The populated <code>NewApiKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewApiKey();

            if (data.hasOwnProperty('Token')) {
                obj['Token'] = ApiClient.convertToType(data['Token'], 'String');
            }
            if (data.hasOwnProperty('AccessLevel')) {
                obj['AccessLevel'] = ApiClient.convertToType(data['AccessLevel'], [AccessLevel]);
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('DateCreated')) {
                obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'Date');
            }
            if (data.hasOwnProperty('LastUse')) {
                obj['LastUse'] = ApiClient.convertToType(data['LastUse'], 'Date');
            }
            if (data.hasOwnProperty('Expires')) {
                obj['Expires'] = ApiClient.convertToType(data['Expires'], 'Date');
            }
            if (data.hasOwnProperty('RestrictAccessToIPRange')) {
                obj['RestrictAccessToIPRange'] = ApiClient.convertToType(data['RestrictAccessToIPRange'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NewApiKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewApiKey</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Token'] && !(typeof data['Token'] === 'string' || data['Token'] instanceof String)) {
            throw new Error("Expected the field `Token` to be a primitive type in the JSON string but got " + data['Token']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['AccessLevel'])) {
            throw new Error("Expected the field `AccessLevel` to be an array in the JSON data but got " + data['AccessLevel']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['RestrictAccessToIPRange'])) {
            throw new Error("Expected the field `RestrictAccessToIPRange` to be an array in the JSON data but got " + data['RestrictAccessToIPRange']);
        }

        return true;
    }


}



/**
 * Unique token to be used in the system
 * @member {String} Token
 */
NewApiKey.prototype['Token'] = undefined;

/**
 * Access level or permission to be assigned to this ApiKey.
 * @member {Array.<module:model/AccessLevel>} AccessLevel
 */
NewApiKey.prototype['AccessLevel'] = undefined;

/**
 * Name of the ApiKey.
 * @member {String} Name
 */
NewApiKey.prototype['Name'] = undefined;

/**
 * Date this ApiKey was created.
 * @member {Date} DateCreated
 */
NewApiKey.prototype['DateCreated'] = undefined;

/**
 * Date this ApiKey was last used.
 * @member {Date} LastUse
 */
NewApiKey.prototype['LastUse'] = undefined;

/**
 * Date this ApiKey expires.
 * @member {Date} Expires
 */
NewApiKey.prototype['Expires'] = undefined;

/**
 * Which IPs can use this ApiKey
 * @member {Array.<String>} RestrictAccessToIPRange
 */
NewApiKey.prototype['RestrictAccessToIPRange'] = undefined;






export default NewApiKey;

