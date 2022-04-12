/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    The API has a limit of 20 concurrent connections and a hard timeout of 600 seconds per request.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
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
 * The Suppression model module.
 * @module model/Suppression
 * @version 4.0.18
 */
class Suppression {
    /**
     * Constructs a new <code>Suppression</code>.
     * Suppression - Email returning Hard Bounces
     * @alias module:model/Suppression
     */
    constructor() { 
        
        Suppression.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Suppression</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Suppression} obj Optional instance to populate.
     * @return {module:model/Suppression} The populated <code>Suppression</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Suppression();

            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('FriendlyErrorMessage')) {
                obj['FriendlyErrorMessage'] = ApiClient.convertToType(data['FriendlyErrorMessage'], 'String');
            }
            if (data.hasOwnProperty('ErrorCode')) {
                obj['ErrorCode'] = ApiClient.convertToType(data['ErrorCode'], 'Number');
            }
            if (data.hasOwnProperty('DateUpdated')) {
                obj['DateUpdated'] = ApiClient.convertToType(data['DateUpdated'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Proper email address.
 * @member {String} Email
 */
Suppression.prototype['Email'] = undefined;

/**
 * RFC error message
 * @member {String} FriendlyErrorMessage
 */
Suppression.prototype['FriendlyErrorMessage'] = undefined;

/**
 * SMTP Error code
 * @member {Number} ErrorCode
 */
Suppression.prototype['ErrorCode'] = undefined;

/**
 * Last change date
 * @member {Date} DateUpdated
 */
Suppression.prototype['DateUpdated'] = undefined;






export default Suppression;

