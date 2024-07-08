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
 * The InboundPayload model module.
 * @module model/InboundPayload
 * @version 4.0.23
 */
class InboundPayload {
    /**
     * Constructs a new <code>InboundPayload</code>.
     * @alias module:model/InboundPayload
     * @param filter {String} Filter of the inbound data
     * @param name {String} Name of this route
     * @param filterType {module:model/InboundRouteFilterType} 
     * @param actionType {module:model/InboundRouteActionType} 
     */
    constructor(filter, name, filterType, actionType) { 
        
        InboundPayload.initialize(this, filter, name, filterType, actionType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, filter, name, filterType, actionType) { 
        obj['Filter'] = filter;
        obj['Name'] = name;
        obj['FilterType'] = filterType;
        obj['ActionType'] = actionType;
    }

    /**
     * Constructs a <code>InboundPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InboundPayload} obj Optional instance to populate.
     * @return {module:model/InboundPayload} The populated <code>InboundPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InboundPayload();

            if (data.hasOwnProperty('Filter')) {
                obj['Filter'] = ApiClient.convertToType(data['Filter'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('FilterType')) {
                obj['FilterType'] = InboundRouteFilterType.constructFromObject(data['FilterType']);
            }
            if (data.hasOwnProperty('ActionType')) {
                obj['ActionType'] = InboundRouteActionType.constructFromObject(data['ActionType']);
            }
            if (data.hasOwnProperty('EmailAddress')) {
                obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
            }
            if (data.hasOwnProperty('HttpAddress')) {
                obj['HttpAddress'] = ApiClient.convertToType(data['HttpAddress'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InboundPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InboundPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InboundPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['Filter'] && !(typeof data['Filter'] === 'string' || data['Filter'] instanceof String)) {
            throw new Error("Expected the field `Filter` to be a primitive type in the JSON string but got " + data['Filter']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['EmailAddress'] && !(typeof data['EmailAddress'] === 'string' || data['EmailAddress'] instanceof String)) {
            throw new Error("Expected the field `EmailAddress` to be a primitive type in the JSON string but got " + data['EmailAddress']);
        }
        // ensure the json data is a string
        if (data['HttpAddress'] && !(typeof data['HttpAddress'] === 'string' || data['HttpAddress'] instanceof String)) {
            throw new Error("Expected the field `HttpAddress` to be a primitive type in the JSON string but got " + data['HttpAddress']);
        }

        return true;
    }


}

InboundPayload.RequiredProperties = ["Filter", "Name", "FilterType", "ActionType"];

/**
 * Filter of the inbound data
 * @member {String} Filter
 */
InboundPayload.prototype['Filter'] = undefined;

/**
 * Name of this route
 * @member {String} Name
 */
InboundPayload.prototype['Name'] = undefined;

/**
 * @member {module:model/InboundRouteFilterType} FilterType
 */
InboundPayload.prototype['FilterType'] = undefined;

/**
 * @member {module:model/InboundRouteActionType} ActionType
 */
InboundPayload.prototype['ActionType'] = undefined;

/**
 * Email to forward the inbound to
 * @member {String} EmailAddress
 */
InboundPayload.prototype['EmailAddress'] = undefined;

/**
 * Address to notify about the inbound
 * @member {String} HttpAddress
 */
InboundPayload.prototype['HttpAddress'] = undefined;






export default InboundPayload;

