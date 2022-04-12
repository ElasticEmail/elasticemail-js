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
* Enum class EventType.
* @enum {}
* @readonly
*/
export default class EventType {
    
        /**
         * value: "Submission"
         * @const
         */
        "Submission" = "Submission";

    
        /**
         * value: "FailedAttempt"
         * @const
         */
        "FailedAttempt" = "FailedAttempt";

    
        /**
         * value: "Bounce"
         * @const
         */
        "Bounce" = "Bounce";

    
        /**
         * value: "Sent"
         * @const
         */
        "Sent" = "Sent";

    
        /**
         * value: "Open"
         * @const
         */
        "Open" = "Open";

    
        /**
         * value: "Click"
         * @const
         */
        "Click" = "Click";

    
        /**
         * value: "Unsubscribe"
         * @const
         */
        "Unsubscribe" = "Unsubscribe";

    
        /**
         * value: "Complaint"
         * @const
         */
        "Complaint" = "Complaint";

    

    /**
    * Returns a <code>EventType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EventType} The enum <code>EventType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

