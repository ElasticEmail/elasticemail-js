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
import FileUploadResult from './FileUploadResult';
import VerificationStatus from './VerificationStatus';

/**
 * The VerificationFileResult model module.
 * @module model/VerificationFileResult
 * @version 4.0.23
 */
class VerificationFileResult {
    /**
     * Constructs a new <code>VerificationFileResult</code>.
     * Simple verification file result info
     * @alias module:model/VerificationFileResult
     */
    constructor() { 
        
        VerificationFileResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VerificationFileResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerificationFileResult} obj Optional instance to populate.
     * @return {module:model/VerificationFileResult} The populated <code>VerificationFileResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerificationFileResult();

            if (data.hasOwnProperty('VerificationID')) {
                obj['VerificationID'] = ApiClient.convertToType(data['VerificationID'], 'String');
            }
            if (data.hasOwnProperty('Filename')) {
                obj['Filename'] = ApiClient.convertToType(data['Filename'], 'String');
            }
            if (data.hasOwnProperty('VerificationStatus')) {
                obj['VerificationStatus'] = VerificationStatus.constructFromObject(data['VerificationStatus']);
            }
            if (data.hasOwnProperty('FileUploadResult')) {
                obj['FileUploadResult'] = FileUploadResult.constructFromObject(data['FileUploadResult']);
            }
            if (data.hasOwnProperty('DateAdded')) {
                obj['DateAdded'] = ApiClient.convertToType(data['DateAdded'], 'Date');
            }
            if (data.hasOwnProperty('Source')) {
                obj['Source'] = ApiClient.convertToType(data['Source'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VerificationFileResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VerificationFileResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['VerificationID'] && !(typeof data['VerificationID'] === 'string' || data['VerificationID'] instanceof String)) {
            throw new Error("Expected the field `VerificationID` to be a primitive type in the JSON string but got " + data['VerificationID']);
        }
        // ensure the json data is a string
        if (data['Filename'] && !(typeof data['Filename'] === 'string' || data['Filename'] instanceof String)) {
            throw new Error("Expected the field `Filename` to be a primitive type in the JSON string but got " + data['Filename']);
        }
        // validate the optional field `FileUploadResult`
        if (data['FileUploadResult']) { // data not null
          FileUploadResult.validateJSON(data['FileUploadResult']);
        }
        // ensure the json data is a string
        if (data['Source'] && !(typeof data['Source'] === 'string' || data['Source'] instanceof String)) {
            throw new Error("Expected the field `Source` to be a primitive type in the JSON string but got " + data['Source']);
        }

        return true;
    }


}



/**
 * Identifier of this verification result
 * @member {String} VerificationID
 */
VerificationFileResult.prototype['VerificationID'] = undefined;

/**
 * Origin file name
 * @member {String} Filename
 */
VerificationFileResult.prototype['Filename'] = undefined;

/**
 * @member {module:model/VerificationStatus} VerificationStatus
 */
VerificationFileResult.prototype['VerificationStatus'] = undefined;

/**
 * @member {module:model/FileUploadResult} FileUploadResult
 */
VerificationFileResult.prototype['FileUploadResult'] = undefined;

/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */
VerificationFileResult.prototype['DateAdded'] = undefined;

/**
 * Origin file extension
 * @member {String} Source
 */
VerificationFileResult.prototype['Source'] = undefined;






export default VerificationFileResult;

