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
 * The SortOrderItem model module.
 * @module model/SortOrderItem
 * @version 4.0.23
 */
class SortOrderItem {
    /**
     * Constructs a new <code>SortOrderItem</code>.
     * Change the ordering of this inbound route for when matching the inbound
     * @alias module:model/SortOrderItem
     * @param publicInboundId {String} ID of the route to change the order of
     * @param sortOrder {Number} 1 - route will be used first
     */
    constructor(publicInboundId, sortOrder) { 
        
        SortOrderItem.initialize(this, publicInboundId, sortOrder);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, publicInboundId, sortOrder) { 
        obj['PublicInboundId'] = publicInboundId;
        obj['SortOrder'] = sortOrder;
    }

    /**
     * Constructs a <code>SortOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SortOrderItem} obj Optional instance to populate.
     * @return {module:model/SortOrderItem} The populated <code>SortOrderItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SortOrderItem();

            if (data.hasOwnProperty('PublicInboundId')) {
                obj['PublicInboundId'] = ApiClient.convertToType(data['PublicInboundId'], 'String');
            }
            if (data.hasOwnProperty('SortOrder')) {
                obj['SortOrder'] = ApiClient.convertToType(data['SortOrder'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SortOrderItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SortOrderItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SortOrderItem.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['PublicInboundId'] && !(typeof data['PublicInboundId'] === 'string' || data['PublicInboundId'] instanceof String)) {
            throw new Error("Expected the field `PublicInboundId` to be a primitive type in the JSON string but got " + data['PublicInboundId']);
        }

        return true;
    }


}

SortOrderItem.RequiredProperties = ["PublicInboundId", "SortOrder"];

/**
 * ID of the route to change the order of
 * @member {String} PublicInboundId
 */
SortOrderItem.prototype['PublicInboundId'] = undefined;

/**
 * 1 - route will be used first
 * @member {Number} SortOrder
 */
SortOrderItem.prototype['SortOrder'] = undefined;






export default SortOrderItem;

