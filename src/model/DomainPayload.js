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
 * The DomainPayload model module.
 * @module model/DomainPayload
 * @version 4.0.26
 */
class DomainPayload {
    /**
     * Constructs a new <code>DomainPayload</code>.
     * @alias module:model/DomainPayload
     */
    constructor() { 
        
        DomainPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DomainPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainPayload} obj Optional instance to populate.
     * @return {module:model/DomainPayload} The populated <code>DomainPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainPayload();

            if (data.hasOwnProperty('Domain')) {
                obj['Domain'] = ApiClient.convertToType(data['Domain'], 'String');
            }
            if (data.hasOwnProperty('SetAsDefault')) {
                obj['SetAsDefault'] = ApiClient.convertToType(data['SetAsDefault'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DomainPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DomainPayload</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Domain'] && !(typeof data['Domain'] === 'string' || data['Domain'] instanceof String)) {
            throw new Error("Expected the field `Domain` to be a primitive type in the JSON string but got " + data['Domain']);
        }

        return true;
    }


}



/**
 * Name of selected domain.
 * @member {String} Domain
 */
DomainPayload.prototype['Domain'] = undefined;

/**
 * @member {Boolean} SetAsDefault
 */
DomainPayload.prototype['SetAsDefault'] = undefined;






export default DomainPayload;

