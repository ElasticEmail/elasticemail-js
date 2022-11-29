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
 * The SegmentPayload model module.
 * @module model/SegmentPayload
 * @version 4.0.21
 */
class SegmentPayload {
    /**
     * Constructs a new <code>SegmentPayload</code>.
     * @alias module:model/SegmentPayload
     * @param name {String} Segment name
     * @param rule {String} SQL-like rule to determine which Contacts belong to this Segment. Help for building a segment rule can be found here: https://help.elasticemail.com/en/articles/5162182-segment-rules
     */
    constructor(name, rule) { 
        
        SegmentPayload.initialize(this, name, rule);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, rule) { 
        obj['Name'] = name;
        obj['Rule'] = rule;
    }

    /**
     * Constructs a <code>SegmentPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SegmentPayload} obj Optional instance to populate.
     * @return {module:model/SegmentPayload} The populated <code>SegmentPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SegmentPayload();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Rule')) {
                obj['Rule'] = ApiClient.convertToType(data['Rule'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SegmentPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SegmentPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SegmentPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Rule'] && !(typeof data['Rule'] === 'string' || data['Rule'] instanceof String)) {
            throw new Error("Expected the field `Rule` to be a primitive type in the JSON string but got " + data['Rule']);
        }

        return true;
    }


}

SegmentPayload.RequiredProperties = ["Name", "Rule"];

/**
 * Segment name
 * @member {String} Name
 */
SegmentPayload.prototype['Name'] = undefined;

/**
 * SQL-like rule to determine which Contacts belong to this Segment. Help for building a segment rule can be found here: https://help.elasticemail.com/en/articles/5162182-segment-rules
 * @member {String} Rule
 */
SegmentPayload.prototype['Rule'] = undefined;






export default SegmentPayload;

