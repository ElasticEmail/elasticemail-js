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
import EmailContent from './EmailContent';
import Options from './Options';
import TransactionalRecipient from './TransactionalRecipient';

/**
 * The EmailTransactionalMessageData model module.
 * @module model/EmailTransactionalMessageData
 * @version 4.0.21
 */
class EmailTransactionalMessageData {
    /**
     * Constructs a new <code>EmailTransactionalMessageData</code>.
     * Email data
     * @alias module:model/EmailTransactionalMessageData
     * @param recipients {module:model/TransactionalRecipient} 
     */
    constructor(recipients) { 
        
        EmailTransactionalMessageData.initialize(this, recipients);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, recipients) { 
        obj['Recipients'] = recipients;
    }

    /**
     * Constructs a <code>EmailTransactionalMessageData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailTransactionalMessageData} obj Optional instance to populate.
     * @return {module:model/EmailTransactionalMessageData} The populated <code>EmailTransactionalMessageData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailTransactionalMessageData();

            if (data.hasOwnProperty('Recipients')) {
                obj['Recipients'] = TransactionalRecipient.constructFromObject(data['Recipients']);
            }
            if (data.hasOwnProperty('Content')) {
                obj['Content'] = EmailContent.constructFromObject(data['Content']);
            }
            if (data.hasOwnProperty('Options')) {
                obj['Options'] = Options.constructFromObject(data['Options']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailTransactionalMessageData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailTransactionalMessageData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmailTransactionalMessageData.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `Recipients`
        if (data['Recipients']) { // data not null
          TransactionalRecipient.validateJSON(data['Recipients']);
        }
        // validate the optional field `Content`
        if (data['Content']) { // data not null
          EmailContent.validateJSON(data['Content']);
        }
        // validate the optional field `Options`
        if (data['Options']) { // data not null
          Options.validateJSON(data['Options']);
        }

        return true;
    }


}

EmailTransactionalMessageData.RequiredProperties = ["Recipients"];

/**
 * @member {module:model/TransactionalRecipient} Recipients
 */
EmailTransactionalMessageData.prototype['Recipients'] = undefined;

/**
 * @member {module:model/EmailContent} Content
 */
EmailTransactionalMessageData.prototype['Content'] = undefined;

/**
 * @member {module:model/Options} Options
 */
EmailTransactionalMessageData.prototype['Options'] = undefined;






export default EmailTransactionalMessageData;

