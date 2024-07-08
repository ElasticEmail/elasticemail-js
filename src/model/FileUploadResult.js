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
 * The FileUploadResult model module.
 * @module model/FileUploadResult
 * @version 4.0.24
 */
class FileUploadResult {
    /**
     * Constructs a new <code>FileUploadResult</code>.
     * @alias module:model/FileUploadResult
     */
    constructor() { 
        
        FileUploadResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileUploadResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileUploadResult} obj Optional instance to populate.
     * @return {module:model/FileUploadResult} The populated <code>FileUploadResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileUploadResult();

            if (data.hasOwnProperty('EmailsCount')) {
                obj['EmailsCount'] = ApiClient.convertToType(data['EmailsCount'], 'Number');
            }
            if (data.hasOwnProperty('DuplicatedEmailsCount')) {
                obj['DuplicatedEmailsCount'] = ApiClient.convertToType(data['DuplicatedEmailsCount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileUploadResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileUploadResult</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * How many unique emails were detected the file
 * @member {Number} EmailsCount
 */
FileUploadResult.prototype['EmailsCount'] = undefined;

/**
 * How many email duplicates were detected
 * @member {Number} DuplicatedEmailsCount
 */
FileUploadResult.prototype['DuplicatedEmailsCount'] = undefined;






export default FileUploadResult;

