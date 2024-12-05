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
 * The ListUpdatePayload model module.
 * @module model/ListUpdatePayload
 * @version 4.0.25
 */
class ListUpdatePayload {
    /**
     * Constructs a new <code>ListUpdatePayload</code>.
     * @alias module:model/ListUpdatePayload
     */
    constructor() { 
        
        ListUpdatePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListUpdatePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUpdatePayload} obj Optional instance to populate.
     * @return {module:model/ListUpdatePayload} The populated <code>ListUpdatePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUpdatePayload();

            if (data.hasOwnProperty('NewListName')) {
                obj['NewListName'] = ApiClient.convertToType(data['NewListName'], 'String');
            }
            if (data.hasOwnProperty('AllowUnsubscribe')) {
                obj['AllowUnsubscribe'] = ApiClient.convertToType(data['AllowUnsubscribe'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListUpdatePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListUpdatePayload</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['NewListName'] && !(typeof data['NewListName'] === 'string' || data['NewListName'] instanceof String)) {
            throw new Error("Expected the field `NewListName` to be a primitive type in the JSON string but got " + data['NewListName']);
        }

        return true;
    }


}



/**
 * Name of your list if you want to change it.
 * @member {String} NewListName
 */
ListUpdatePayload.prototype['NewListName'] = undefined;

/**
 * True: Allow unsubscribing from this list. Otherwise, false
 * @member {Boolean} AllowUnsubscribe
 */
ListUpdatePayload.prototype['AllowUnsubscribe'] = undefined;






export default ListUpdatePayload;

