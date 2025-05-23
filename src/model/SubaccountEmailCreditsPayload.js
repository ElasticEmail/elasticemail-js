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
 * The SubaccountEmailCreditsPayload model module.
 * @module model/SubaccountEmailCreditsPayload
 * @version 4.0.26
 */
class SubaccountEmailCreditsPayload {
    /**
     * Constructs a new <code>SubaccountEmailCreditsPayload</code>.
     * A change to SubAccount email credits pool, with an additional note.
     * @alias module:model/SubaccountEmailCreditsPayload
     * @param credits {Number} Positive or negative value; this will be added or subtracted from Subaccount's current email Credits pool.
     */
    constructor(credits) { 
        
        SubaccountEmailCreditsPayload.initialize(this, credits);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, credits) { 
        obj['Credits'] = credits;
    }

    /**
     * Constructs a <code>SubaccountEmailCreditsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubaccountEmailCreditsPayload} obj Optional instance to populate.
     * @return {module:model/SubaccountEmailCreditsPayload} The populated <code>SubaccountEmailCreditsPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubaccountEmailCreditsPayload();

            if (data.hasOwnProperty('Credits')) {
                obj['Credits'] = ApiClient.convertToType(data['Credits'], 'Number');
            }
            if (data.hasOwnProperty('Notes')) {
                obj['Notes'] = ApiClient.convertToType(data['Notes'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubaccountEmailCreditsPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubaccountEmailCreditsPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubaccountEmailCreditsPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['Notes'] && !(typeof data['Notes'] === 'string' || data['Notes'] instanceof String)) {
            throw new Error("Expected the field `Notes` to be a primitive type in the JSON string but got " + data['Notes']);
        }

        return true;
    }


}

SubaccountEmailCreditsPayload.RequiredProperties = ["Credits"];

/**
 * Positive or negative value; this will be added or subtracted from Subaccount's current email Credits pool.
 * @member {Number} Credits
 */
SubaccountEmailCreditsPayload.prototype['Credits'] = undefined;

/**
 * Note to append to this credits change, for history.
 * @member {String} Notes
 */
SubaccountEmailCreditsPayload.prototype['Notes'] = undefined;






export default SubaccountEmailCreditsPayload;

