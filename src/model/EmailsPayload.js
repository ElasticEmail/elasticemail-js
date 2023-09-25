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

/**
 * The EmailsPayload model module.
 * @module model/EmailsPayload
 * @version 4.0.22
 */
class EmailsPayload {
    /**
     * Constructs a new <code>EmailsPayload</code>.
     * Provide either rule or a list of emails, not both.
     * @alias module:model/EmailsPayload
     */
    constructor() { 
        
        EmailsPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailsPayload} obj Optional instance to populate.
     * @return {module:model/EmailsPayload} The populated <code>EmailsPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailsPayload();

            if (data.hasOwnProperty('Rule')) {
                obj['Rule'] = ApiClient.convertToType(data['Rule'], 'String');
            }
            if (data.hasOwnProperty('Emails')) {
                obj['Emails'] = ApiClient.convertToType(data['Emails'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailsPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailsPayload</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Rule'] && !(typeof data['Rule'] === 'string' || data['Rule'] instanceof String)) {
            throw new Error("Expected the field `Rule` to be a primitive type in the JSON string but got " + data['Rule']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Emails'])) {
            throw new Error("Expected the field `Emails` to be an array in the JSON data but got " + data['Emails']);
        }

        return true;
    }


}



/**
 * SQL-like rule. Sending 'All' as a value loads all resources of the given type. Help for building a segment rule can be found here: https://help.elasticemail.com/en/articles/5162182-segment-rules
 * @member {String} Rule
 */
EmailsPayload.prototype['Rule'] = undefined;

/**
 * Comma delimited list of contact emails
 * @member {Array.<String>} Emails
 */
EmailsPayload.prototype['Emails'] = undefined;






export default EmailsPayload;

