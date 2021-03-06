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
import ConsentData from './ConsentData';
import ContactStatus from './ContactStatus';

/**
 * The ContactPayload model module.
 * @module model/ContactPayload
 * @version 4.0.20
 */
class ContactPayload {
    /**
     * Constructs a new <code>ContactPayload</code>.
     * @alias module:model/ContactPayload
     * @param email {String} Proper email address.
     */
    constructor(email) { 
        
        ContactPayload.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['Email'] = email;
    }

    /**
     * Constructs a <code>ContactPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactPayload} obj Optional instance to populate.
     * @return {module:model/ContactPayload} The populated <code>ContactPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactPayload();

            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ContactStatus.constructFromObject(data['Status']);
            }
            if (data.hasOwnProperty('FirstName')) {
                obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
            }
            if (data.hasOwnProperty('LastName')) {
                obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
            }
            if (data.hasOwnProperty('CustomFields')) {
                obj['CustomFields'] = ApiClient.convertToType(data['CustomFields'], {'String': 'String'});
            }
            if (data.hasOwnProperty('Consent')) {
                obj['Consent'] = ConsentData.constructFromObject(data['Consent']);
            }
        }
        return obj;
    }


}

/**
 * Proper email address.
 * @member {String} Email
 */
ContactPayload.prototype['Email'] = undefined;

/**
 * @member {module:model/ContactStatus} Status
 */
ContactPayload.prototype['Status'] = undefined;

/**
 * First name.
 * @member {String} FirstName
 */
ContactPayload.prototype['FirstName'] = undefined;

/**
 * Last name.
 * @member {String} LastName
 */
ContactPayload.prototype['LastName'] = undefined;

/**
 * A key-value collection of custom contact fields which can be used in the system. Only already existing custom fields will be saved.
 * @member {Object.<String, String>} CustomFields
 */
ContactPayload.prototype['CustomFields'] = undefined;

/**
 * @member {module:model/ConsentData} Consent
 */
ContactPayload.prototype['Consent'] = undefined;






export default ContactPayload;

