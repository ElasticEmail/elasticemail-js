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
import InboundRouteActionType from './InboundRouteActionType';
import InboundRouteFilterType from './InboundRouteFilterType';

/**
 * The InboundRoute model module.
 * @module model/InboundRoute
 * @version 4.0.26
 */
class InboundRoute {
    /**
     * Constructs a new <code>InboundRoute</code>.
     * @alias module:model/InboundRoute
     */
    constructor() { 
        
        InboundRoute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InboundRoute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InboundRoute} obj Optional instance to populate.
     * @return {module:model/InboundRoute} The populated <code>InboundRoute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InboundRoute();

            if (data.hasOwnProperty('PublicId')) {
                obj['PublicId'] = ApiClient.convertToType(data['PublicId'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('FilterType')) {
                obj['FilterType'] = InboundRouteFilterType.constructFromObject(data['FilterType']);
            }
            if (data.hasOwnProperty('Filter')) {
                obj['Filter'] = ApiClient.convertToType(data['Filter'], 'String');
            }
            if (data.hasOwnProperty('ActionType')) {
                obj['ActionType'] = InboundRouteActionType.constructFromObject(data['ActionType']);
            }
            if (data.hasOwnProperty('ActionParameter')) {
                obj['ActionParameter'] = ApiClient.convertToType(data['ActionParameter'], 'String');
            }
            if (data.hasOwnProperty('SortOrder')) {
                obj['SortOrder'] = ApiClient.convertToType(data['SortOrder'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InboundRoute</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InboundRoute</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['PublicId'] && !(typeof data['PublicId'] === 'string' || data['PublicId'] instanceof String)) {
            throw new Error("Expected the field `PublicId` to be a primitive type in the JSON string but got " + data['PublicId']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Filter'] && !(typeof data['Filter'] === 'string' || data['Filter'] instanceof String)) {
            throw new Error("Expected the field `Filter` to be a primitive type in the JSON string but got " + data['Filter']);
        }
        // ensure the json data is a string
        if (data['ActionParameter'] && !(typeof data['ActionParameter'] === 'string' || data['ActionParameter'] instanceof String)) {
            throw new Error("Expected the field `ActionParameter` to be a primitive type in the JSON string but got " + data['ActionParameter']);
        }

        return true;
    }


}



/**
 * @member {String} PublicId
 */
InboundRoute.prototype['PublicId'] = undefined;

/**
 * Name of this route
 * @member {String} Name
 */
InboundRoute.prototype['Name'] = undefined;

/**
 * @member {module:model/InboundRouteFilterType} FilterType
 */
InboundRoute.prototype['FilterType'] = undefined;

/**
 * Filter of the inbound data
 * @member {String} Filter
 */
InboundRoute.prototype['Filter'] = undefined;

/**
 * @member {module:model/InboundRouteActionType} ActionType
 */
InboundRoute.prototype['ActionType'] = undefined;

/**
 * URL address or Email to notify about the inbound
 * @member {String} ActionParameter
 */
InboundRoute.prototype['ActionParameter'] = undefined;

/**
 * Place of this route in your routes queue's order
 * @member {Number} SortOrder
 */
InboundRoute.prototype['SortOrder'] = undefined;






export default InboundRoute;

