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
 * The FileInfo model module.
 * @module model/FileInfo
 * @version 4.0.18
 */
class FileInfo {
    /**
     * Constructs a new <code>FileInfo</code>.
     * File information
     * @alias module:model/FileInfo
     */
    constructor() { 
        
        FileInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileInfo} obj Optional instance to populate.
     * @return {module:model/FileInfo} The populated <code>FileInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileInfo();

            if (data.hasOwnProperty('FileName')) {
                obj['FileName'] = ApiClient.convertToType(data['FileName'], 'String');
            }
            if (data.hasOwnProperty('Size')) {
                obj['Size'] = ApiClient.convertToType(data['Size'], 'Number');
            }
            if (data.hasOwnProperty('DateAdded')) {
                obj['DateAdded'] = ApiClient.convertToType(data['DateAdded'], 'Date');
            }
            if (data.hasOwnProperty('ExpirationDate')) {
                obj['ExpirationDate'] = ApiClient.convertToType(data['ExpirationDate'], 'Date');
            }
            if (data.hasOwnProperty('ContentType')) {
                obj['ContentType'] = ApiClient.convertToType(data['ContentType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of your file including extension.
 * @member {String} FileName
 */
FileInfo.prototype['FileName'] = undefined;

/**
 * Size of your attachment (in bytes).
 * @member {Number} Size
 */
FileInfo.prototype['Size'] = undefined;

/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */
FileInfo.prototype['DateAdded'] = undefined;

/**
 * Date when the file will be deleted from your Account.
 * @member {Date} ExpirationDate
 */
FileInfo.prototype['ExpirationDate'] = undefined;

/**
 * Content type of the file.
 * @member {String} ContentType
 */
FileInfo.prototype['ContentType'] = undefined;






export default FileInfo;

