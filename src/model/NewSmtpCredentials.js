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
 * The NewSmtpCredentials model module.
 * @module model/NewSmtpCredentials
 * @version 4.0.22
 */
class NewSmtpCredentials {
    /**
     * Constructs a new <code>NewSmtpCredentials</code>.
     * Newly generated SMTP Credentials with Token
     * @alias module:model/NewSmtpCredentials
     */
    constructor() { 
        
        NewSmtpCredentials.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewSmtpCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewSmtpCredentials} obj Optional instance to populate.
     * @return {module:model/NewSmtpCredentials} The populated <code>NewSmtpCredentials</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewSmtpCredentials();

            if (data.hasOwnProperty('Token')) {
                obj['Token'] = ApiClient.convertToType(data['Token'], 'String');
            }
            if (data.hasOwnProperty('AccessLevel')) {
                obj['AccessLevel'] = AccessLevel.constructFromObject(data['AccessLevel']);
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
     * Validates the JSON data with respect to <code>NewSmtpCredentials</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewSmtpCredentials</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Token'] && !(typeof data['Token'] === 'string' || data['Token'] instanceof String)) {
            throw new Error("Expected the field `Token` to be a primitive type in the JSON string but got " + data['Token']);
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
NewSmtpCredentials.prototype['Token'] = undefined;

/**
 * @member {module:model/AccessLevel} AccessLevel
 */
NewSmtpCredentials.prototype['AccessLevel'] = undefined;

/**
 * Name of the key.
 * @member {String} Name
 */
NewSmtpCredentials.prototype['Name'] = undefined;

/**
 * Date this SmtpCredential was created.
 * @member {Date} DateCreated
 */
NewSmtpCredentials.prototype['DateCreated'] = undefined;

/**
 * Date this SmtpCredential was last used.
 * @member {Date} LastUse
 */
NewSmtpCredentials.prototype['LastUse'] = undefined;

/**
 * Date this SmtpCredential expires.
 * @member {Date} Expires
 */
NewSmtpCredentials.prototype['Expires'] = undefined;

/**
 * Which IPs can use this SmtpCredential
 * @member {Array.<String>} RestrictAccessToIPRange
 */
NewSmtpCredentials.prototype['RestrictAccessToIPRange'] = undefined;






export default NewSmtpCredentials;

