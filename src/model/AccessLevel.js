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
* Enum class AccessLevel.
* @enum {}
* @readonly
*/
export default class AccessLevel {
    
        /**
         * value: "None"
         * @const
         */
        "None" = "None";

    
        /**
         * value: "ViewAccount"
         * @const
         */
        "ViewAccount" = "ViewAccount";

    
        /**
         * value: "ViewContacts"
         * @const
         */
        "ViewContacts" = "ViewContacts";

    
        /**
         * value: "ViewForms"
         * @const
         */
        "ViewForms" = "ViewForms";

    
        /**
         * value: "ViewTemplates"
         * @const
         */
        "ViewTemplates" = "ViewTemplates";

    
        /**
         * value: "ViewCampaigns"
         * @const
         */
        "ViewCampaigns" = "ViewCampaigns";

    
        /**
         * value: "ViewChannels"
         * @const
         */
        "ViewChannels" = "ViewChannels";

    
        /**
         * value: "ViewAutomations"
         * @const
         */
        "ViewAutomations" = "ViewAutomations";

    
        /**
         * value: "ViewSurveys"
         * @const
         */
        "ViewSurveys" = "ViewSurveys";

    
        /**
         * value: "ViewSettings"
         * @const
         */
        "ViewSettings" = "ViewSettings";

    
        /**
         * value: "ViewBilling"
         * @const
         */
        "ViewBilling" = "ViewBilling";

    
        /**
         * value: "ViewSubAccounts"
         * @const
         */
        "ViewSubAccounts" = "ViewSubAccounts";

    
        /**
         * value: "ViewUsers"
         * @const
         */
        "ViewUsers" = "ViewUsers";

    
        /**
         * value: "ViewFiles"
         * @const
         */
        "ViewFiles" = "ViewFiles";

    
        /**
         * value: "ViewReports"
         * @const
         */
        "ViewReports" = "ViewReports";

    
        /**
         * value: "ModifyAccount"
         * @const
         */
        "ModifyAccount" = "ModifyAccount";

    
        /**
         * value: "ModifyContacts"
         * @const
         */
        "ModifyContacts" = "ModifyContacts";

    
        /**
         * value: "ModifyForms"
         * @const
         */
        "ModifyForms" = "ModifyForms";

    
        /**
         * value: "ModifyTemplates"
         * @const
         */
        "ModifyTemplates" = "ModifyTemplates";

    
        /**
         * value: "ModifyCampaigns"
         * @const
         */
        "ModifyCampaigns" = "ModifyCampaigns";

    
        /**
         * value: "ModifyChannels"
         * @const
         */
        "ModifyChannels" = "ModifyChannels";

    
        /**
         * value: "ModifyAutomations"
         * @const
         */
        "ModifyAutomations" = "ModifyAutomations";

    
        /**
         * value: "ModifySurveys"
         * @const
         */
        "ModifySurveys" = "ModifySurveys";

    
        /**
         * value: "ModifyFiles"
         * @const
         */
        "ModifyFiles" = "ModifyFiles";

    
        /**
         * value: "Export"
         * @const
         */
        "Export" = "Export";

    
        /**
         * value: "SendSmtp"
         * @const
         */
        "SendSmtp" = "SendSmtp";

    
        /**
         * value: "SendSMS"
         * @const
         */
        "SendSMS" = "SendSMS";

    
        /**
         * value: "ModifySettings"
         * @const
         */
        "ModifySettings" = "ModifySettings";

    
        /**
         * value: "ModifyBilling"
         * @const
         */
        "ModifyBilling" = "ModifyBilling";

    
        /**
         * value: "ModifyProfile"
         * @const
         */
        "ModifyProfile" = "ModifyProfile";

    
        /**
         * value: "ModifySubAccounts"
         * @const
         */
        "ModifySubAccounts" = "ModifySubAccounts";

    
        /**
         * value: "ModifyUsers"
         * @const
         */
        "ModifyUsers" = "ModifyUsers";

    
        /**
         * value: "Security"
         * @const
         */
        "Security" = "Security";

    
        /**
         * value: "ModifyLanguage"
         * @const
         */
        "ModifyLanguage" = "ModifyLanguage";

    
        /**
         * value: "ViewSupport"
         * @const
         */
        "ViewSupport" = "ViewSupport";

    
        /**
         * value: "SendHttp"
         * @const
         */
        "SendHttp" = "SendHttp";

    
        /**
         * value: "Modify2FA"
         * @const
         */
        "Modify2FA" = "Modify2FA";

    
        /**
         * value: "ModifySupport"
         * @const
         */
        "ModifySupport" = "ModifySupport";

    
        /**
         * value: "ViewCustomFields"
         * @const
         */
        "ViewCustomFields" = "ViewCustomFields";

    
        /**
         * value: "ModifyCustomFields"
         * @const
         */
        "ModifyCustomFields" = "ModifyCustomFields";

    
        /**
         * value: "ModifyWebNotifications"
         * @const
         */
        "ModifyWebNotifications" = "ModifyWebNotifications";

    
        /**
         * value: "ExtendedLogs"
         * @const
         */
        "ExtendedLogs" = "ExtendedLogs";

    
        /**
         * value: "VerifyEmails"
         * @const
         */
        "VerifyEmails" = "VerifyEmails";

    
        /**
         * value: "ViewEmailVerifications"
         * @const
         */
        "ViewEmailVerifications" = "ViewEmailVerifications";

    
        /**
         * value: "ViewMarketing"
         * @const
         */
        "ViewMarketing" = "ViewMarketing";

    
        /**
         * value: "ViewEmailApi"
         * @const
         */
        "ViewEmailApi" = "ViewEmailApi";

    

    /**
    * Returns a <code>AccessLevel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AccessLevel} The enum <code>AccessLevel</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
