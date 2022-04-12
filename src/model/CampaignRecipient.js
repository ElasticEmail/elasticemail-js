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
 * The CampaignRecipient model module.
 * @module model/CampaignRecipient
 * @version 4.0.18
 */
class CampaignRecipient {
    /**
     * Constructs a new <code>CampaignRecipient</code>.
     * A set of lists and segments names to read recipients from
     * @alias module:model/CampaignRecipient
     */
    constructor() { 
        
        CampaignRecipient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CampaignRecipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignRecipient} obj Optional instance to populate.
     * @return {module:model/CampaignRecipient} The populated <code>CampaignRecipient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignRecipient();

            if (data.hasOwnProperty('ListNames')) {
                obj['ListNames'] = ApiClient.convertToType(data['ListNames'], ['String']);
            }
            if (data.hasOwnProperty('SegmentNames')) {
                obj['SegmentNames'] = ApiClient.convertToType(data['SegmentNames'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Names of lists from your Account to read recipients from
 * @member {Array.<String>} ListNames
 */
CampaignRecipient.prototype['ListNames'] = undefined;

/**
 * Names of segments from your Account to read recipients from
 * @member {Array.<String>} SegmentNames
 */
CampaignRecipient.prototype['SegmentNames'] = undefined;






export default CampaignRecipient;

