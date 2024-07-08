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
 * The EmailView model module.
 * @module model/EmailView
 * @version 4.0.23
 */
class EmailView {
    /**
     * Constructs a new <code>EmailView</code>.
     * Email details formatted in json
     * @alias module:model/EmailView
     */
    constructor() { 
        
        EmailView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailView} obj Optional instance to populate.
     * @return {module:model/EmailView} The populated <code>EmailView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailView();

            if (data.hasOwnProperty('Body')) {
                obj['Body'] = ApiClient.convertToType(data['Body'], 'String');
            }
            if (data.hasOwnProperty('Subject')) {
                obj['Subject'] = ApiClient.convertToType(data['Subject'], 'String');
            }
            if (data.hasOwnProperty('From')) {
                obj['From'] = ApiClient.convertToType(data['From'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailView</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Body'] && !(typeof data['Body'] === 'string' || data['Body'] instanceof String)) {
            throw new Error("Expected the field `Body` to be a primitive type in the JSON string but got " + data['Body']);
        }
        // ensure the json data is a string
        if (data['Subject'] && !(typeof data['Subject'] === 'string' || data['Subject'] instanceof String)) {
            throw new Error("Expected the field `Subject` to be a primitive type in the JSON string but got " + data['Subject']);
        }
        // ensure the json data is a string
        if (data['From'] && !(typeof data['From'] === 'string' || data['From'] instanceof String)) {
            throw new Error("Expected the field `From` to be a primitive type in the JSON string but got " + data['From']);
        }

        return true;
    }


}



/**
 * Body (HTML, otherwise plain text) of email
 * @member {String} Body
 */
EmailView.prototype['Body'] = undefined;

/**
 * Default subject of email.
 * @member {String} Subject
 */
EmailView.prototype['Subject'] = undefined;

/**
 * From email address
 * @member {String} From
 */
EmailView.prototype['From'] = undefined;






export default EmailView;

