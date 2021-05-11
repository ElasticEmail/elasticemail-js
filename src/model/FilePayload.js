/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    This is the documentation for REST API. If you’d like to read our legacy documentation regarding Web API v2 click <a target=\"_blank\" href=\"https://api.elasticemail.com/public/help\">here</a>.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
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
 * The FilePayload model module.
 * @module model/FilePayload
 * @version 4.0.1
 */
class FilePayload {
    /**
     * Constructs a new <code>FilePayload</code>.
     * @alias module:model/FilePayload
     */
    constructor() { 
        
        FilePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilePayload} obj Optional instance to populate.
     * @return {module:model/FilePayload} The populated <code>FilePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilePayload();

            if (data.hasOwnProperty('BinaryContent')) {
                obj['BinaryContent'] = ApiClient.convertToType(data['BinaryContent'], 'Blob');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('ContentType')) {
                obj['ContentType'] = ApiClient.convertToType(data['ContentType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Content of the file sent as binary data
 * @member {Blob} BinaryContent
 */
FilePayload.prototype['BinaryContent'] = undefined;

/**
 * Filename
 * @member {String} Name
 */
FilePayload.prototype['Name'] = undefined;

/**
 * Type of file's content (e.g. image/jpeg)
 * @member {String} ContentType
 */
FilePayload.prototype['ContentType'] = undefined;






export default FilePayload;

