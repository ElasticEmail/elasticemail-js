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
import CampaignOptions from './CampaignOptions';
import CampaignRecipient from './CampaignRecipient';
import CampaignStatus from './CampaignStatus';
import CampaignTemplate from './CampaignTemplate';

/**
 * The Campaign model module.
 * @module model/Campaign
 * @version 4.0.23
 */
class Campaign {
    /**
     * Constructs a new <code>Campaign</code>.
     * @alias module:model/Campaign
     * @param name {String} Campaign name
     * @param recipients {module:model/CampaignRecipient} 
     */
    constructor(name, recipients) { 
        
        Campaign.initialize(this, name, recipients);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, recipients) { 
        obj['Name'] = name;
        obj['Recipients'] = recipients;
    }

    /**
     * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Campaign} obj Optional instance to populate.
     * @return {module:model/Campaign} The populated <code>Campaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Campaign();

            if (data.hasOwnProperty('Content')) {
                obj['Content'] = ApiClient.convertToType(data['Content'], [CampaignTemplate]);
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = CampaignStatus.constructFromObject(data['Status']);
            }
            if (data.hasOwnProperty('Recipients')) {
                obj['Recipients'] = CampaignRecipient.constructFromObject(data['Recipients']);
            }
            if (data.hasOwnProperty('Options')) {
                obj['Options'] = CampaignOptions.constructFromObject(data['Options']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Campaign</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Campaign</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Campaign.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['Content']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Content'])) {
                throw new Error("Expected the field `Content` to be an array in the JSON data but got " + data['Content']);
            }
            // validate the optional field `Content` (array)
            for (const item of data['Content']) {
                CampaignTemplate.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // validate the optional field `Recipients`
        if (data['Recipients']) { // data not null
          CampaignRecipient.validateJSON(data['Recipients']);
        }
        // validate the optional field `Options`
        if (data['Options']) { // data not null
          CampaignOptions.validateJSON(data['Options']);
        }

        return true;
    }


}

Campaign.RequiredProperties = ["Name", "Recipients"];

/**
 * Campaign's email content. Provide multiple items to send an A/X Split Campaign
 * @member {Array.<module:model/CampaignTemplate>} Content
 */
Campaign.prototype['Content'] = undefined;

/**
 * Campaign name
 * @member {String} Name
 */
Campaign.prototype['Name'] = undefined;

/**
 * @member {module:model/CampaignStatus} Status
 */
Campaign.prototype['Status'] = undefined;

/**
 * @member {module:model/CampaignRecipient} Recipients
 */
Campaign.prototype['Recipients'] = undefined;

/**
 * @member {module:model/CampaignOptions} Options
 */
Campaign.prototype['Options'] = undefined;






export default Campaign;

