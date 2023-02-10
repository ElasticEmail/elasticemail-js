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


import ApiClient from './ApiClient';
import AccessLevel from './model/AccessLevel';
import AccountStatusEnum from './model/AccountStatusEnum';
import ApiKey from './model/ApiKey';
import ApiKeyPayload from './model/ApiKeyPayload';
import BodyContentType from './model/BodyContentType';
import BodyPart from './model/BodyPart';
import Campaign from './model/Campaign';
import CampaignOptions from './model/CampaignOptions';
import CampaignRecipient from './model/CampaignRecipient';
import CampaignStatus from './model/CampaignStatus';
import CampaignTemplate from './model/CampaignTemplate';
import ChannelLogStatusSummary from './model/ChannelLogStatusSummary';
import CompressionFormat from './model/CompressionFormat';
import ConsentData from './model/ConsentData';
import ConsentTracking from './model/ConsentTracking';
import Contact from './model/Contact';
import ContactActivity from './model/ContactActivity';
import ContactPayload from './model/ContactPayload';
import ContactSource from './model/ContactSource';
import ContactStatus from './model/ContactStatus';
import ContactUpdatePayload from './model/ContactUpdatePayload';
import ContactsList from './model/ContactsList';
import DeliveryOptimizationType from './model/DeliveryOptimizationType';
import EmailContent from './model/EmailContent';
import EmailData from './model/EmailData';
import EmailMessageData from './model/EmailMessageData';
import EmailRecipient from './model/EmailRecipient';
import EmailSend from './model/EmailSend';
import EmailStatus from './model/EmailStatus';
import EmailTransactionalMessageData from './model/EmailTransactionalMessageData';
import EmailValidationResult from './model/EmailValidationResult';
import EmailValidationStatus from './model/EmailValidationStatus';
import EmailView from './model/EmailView';
import EmailsPayload from './model/EmailsPayload';
import EncodingType from './model/EncodingType';
import EventType from './model/EventType';
import EventsOrderBy from './model/EventsOrderBy';
import ExportFileFormats from './model/ExportFileFormats';
import ExportLink from './model/ExportLink';
import ExportStatus from './model/ExportStatus';
import FileInfo from './model/FileInfo';
import FilePayload from './model/FilePayload';
import FileUploadResult from './model/FileUploadResult';
import InboundPayload from './model/InboundPayload';
import InboundRoute from './model/InboundRoute';
import InboundRouteActionType from './model/InboundRouteActionType';
import InboundRouteFilterType from './model/InboundRouteFilterType';
import ListPayload from './model/ListPayload';
import ListUpdatePayload from './model/ListUpdatePayload';
import LogJobStatus from './model/LogJobStatus';
import LogStatusSummary from './model/LogStatusSummary';
import MergeEmailPayload from './model/MergeEmailPayload';
import MessageAttachment from './model/MessageAttachment';
import MessageCategory from './model/MessageCategory';
import NewApiKey from './model/NewApiKey';
import NewSmtpCredentials from './model/NewSmtpCredentials';
import Options from './model/Options';
import RecipientEvent from './model/RecipientEvent';
import Segment from './model/Segment';
import SegmentPayload from './model/SegmentPayload';
import SmtpCredentials from './model/SmtpCredentials';
import SmtpCredentialsPayload from './model/SmtpCredentialsPayload';
import SortOrderItem from './model/SortOrderItem';
import SplitOptimizationType from './model/SplitOptimizationType';
import SplitOptions from './model/SplitOptions';
import SubAccountInfo from './model/SubAccountInfo';
import SubaccountEmailCreditsPayload from './model/SubaccountEmailCreditsPayload';
import SubaccountEmailSettings from './model/SubaccountEmailSettings';
import SubaccountEmailSettingsPayload from './model/SubaccountEmailSettingsPayload';
import SubaccountPayload from './model/SubaccountPayload';
import SubaccountSettingsInfo from './model/SubaccountSettingsInfo';
import SubaccountSettingsInfoPayload from './model/SubaccountSettingsInfoPayload';
import Suppression from './model/Suppression';
import Template from './model/Template';
import TemplatePayload from './model/TemplatePayload';
import TemplateScope from './model/TemplateScope';
import TemplateType from './model/TemplateType';
import TransactionalRecipient from './model/TransactionalRecipient';
import Utm from './model/Utm';
import VerificationFileResult from './model/VerificationFileResult';
import VerificationFileResultDetails from './model/VerificationFileResultDetails';
import VerificationStatus from './model/VerificationStatus';
import CampaignsApi from './api/CampaignsApi';
import ContactsApi from './api/ContactsApi';
import EmailsApi from './api/EmailsApi';
import EventsApi from './api/EventsApi';
import FilesApi from './api/FilesApi';
import InboundRouteApi from './api/InboundRouteApi';
import ListsApi from './api/ListsApi';
import SecurityApi from './api/SecurityApi';
import SegmentsApi from './api/SegmentsApi';
import StatisticsApi from './api/StatisticsApi';
import SubAccountsApi from './api/SubAccountsApi';
import SuppressionsApi from './api/SuppressionsApi';
import TemplatesApi from './api/TemplatesApi';
import VerificationsApi from './api/VerificationsApi';


/**
* Official ElasticEmail SDK. This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ElasticEmail = require('index'); // See note below*.
* var xxxSvc = new ElasticEmail.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ElasticEmail.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ElasticEmail.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ElasticEmail.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 4.0.23
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccessLevel model constructor.
     * @property {module:model/AccessLevel}
     */
    AccessLevel,

    /**
     * The AccountStatusEnum model constructor.
     * @property {module:model/AccountStatusEnum}
     */
    AccountStatusEnum,

    /**
     * The ApiKey model constructor.
     * @property {module:model/ApiKey}
     */
    ApiKey,

    /**
     * The ApiKeyPayload model constructor.
     * @property {module:model/ApiKeyPayload}
     */
    ApiKeyPayload,

    /**
     * The BodyContentType model constructor.
     * @property {module:model/BodyContentType}
     */
    BodyContentType,

    /**
     * The BodyPart model constructor.
     * @property {module:model/BodyPart}
     */
    BodyPart,

    /**
     * The Campaign model constructor.
     * @property {module:model/Campaign}
     */
    Campaign,

    /**
     * The CampaignOptions model constructor.
     * @property {module:model/CampaignOptions}
     */
    CampaignOptions,

    /**
     * The CampaignRecipient model constructor.
     * @property {module:model/CampaignRecipient}
     */
    CampaignRecipient,

    /**
     * The CampaignStatus model constructor.
     * @property {module:model/CampaignStatus}
     */
    CampaignStatus,

    /**
     * The CampaignTemplate model constructor.
     * @property {module:model/CampaignTemplate}
     */
    CampaignTemplate,

    /**
     * The ChannelLogStatusSummary model constructor.
     * @property {module:model/ChannelLogStatusSummary}
     */
    ChannelLogStatusSummary,

    /**
     * The CompressionFormat model constructor.
     * @property {module:model/CompressionFormat}
     */
    CompressionFormat,

    /**
     * The ConsentData model constructor.
     * @property {module:model/ConsentData}
     */
    ConsentData,

    /**
     * The ConsentTracking model constructor.
     * @property {module:model/ConsentTracking}
     */
    ConsentTracking,

    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact,

    /**
     * The ContactActivity model constructor.
     * @property {module:model/ContactActivity}
     */
    ContactActivity,

    /**
     * The ContactPayload model constructor.
     * @property {module:model/ContactPayload}
     */
    ContactPayload,

    /**
     * The ContactSource model constructor.
     * @property {module:model/ContactSource}
     */
    ContactSource,

    /**
     * The ContactStatus model constructor.
     * @property {module:model/ContactStatus}
     */
    ContactStatus,

    /**
     * The ContactUpdatePayload model constructor.
     * @property {module:model/ContactUpdatePayload}
     */
    ContactUpdatePayload,

    /**
     * The ContactsList model constructor.
     * @property {module:model/ContactsList}
     */
    ContactsList,

    /**
     * The DeliveryOptimizationType model constructor.
     * @property {module:model/DeliveryOptimizationType}
     */
    DeliveryOptimizationType,

    /**
     * The EmailContent model constructor.
     * @property {module:model/EmailContent}
     */
    EmailContent,

    /**
     * The EmailData model constructor.
     * @property {module:model/EmailData}
     */
    EmailData,

    /**
     * The EmailMessageData model constructor.
     * @property {module:model/EmailMessageData}
     */
    EmailMessageData,

    /**
     * The EmailRecipient model constructor.
     * @property {module:model/EmailRecipient}
     */
    EmailRecipient,

    /**
     * The EmailSend model constructor.
     * @property {module:model/EmailSend}
     */
    EmailSend,

    /**
     * The EmailStatus model constructor.
     * @property {module:model/EmailStatus}
     */
    EmailStatus,

    /**
     * The EmailTransactionalMessageData model constructor.
     * @property {module:model/EmailTransactionalMessageData}
     */
    EmailTransactionalMessageData,

    /**
     * The EmailValidationResult model constructor.
     * @property {module:model/EmailValidationResult}
     */
    EmailValidationResult,

    /**
     * The EmailValidationStatus model constructor.
     * @property {module:model/EmailValidationStatus}
     */
    EmailValidationStatus,

    /**
     * The EmailView model constructor.
     * @property {module:model/EmailView}
     */
    EmailView,

    /**
     * The EmailsPayload model constructor.
     * @property {module:model/EmailsPayload}
     */
    EmailsPayload,

    /**
     * The EncodingType model constructor.
     * @property {module:model/EncodingType}
     */
    EncodingType,

    /**
     * The EventType model constructor.
     * @property {module:model/EventType}
     */
    EventType,

    /**
     * The EventsOrderBy model constructor.
     * @property {module:model/EventsOrderBy}
     */
    EventsOrderBy,

    /**
     * The ExportFileFormats model constructor.
     * @property {module:model/ExportFileFormats}
     */
    ExportFileFormats,

    /**
     * The ExportLink model constructor.
     * @property {module:model/ExportLink}
     */
    ExportLink,

    /**
     * The ExportStatus model constructor.
     * @property {module:model/ExportStatus}
     */
    ExportStatus,

    /**
     * The FileInfo model constructor.
     * @property {module:model/FileInfo}
     */
    FileInfo,

    /**
     * The FilePayload model constructor.
     * @property {module:model/FilePayload}
     */
    FilePayload,

    /**
     * The FileUploadResult model constructor.
     * @property {module:model/FileUploadResult}
     */
    FileUploadResult,

    /**
     * The InboundPayload model constructor.
     * @property {module:model/InboundPayload}
     */
    InboundPayload,

    /**
     * The InboundRoute model constructor.
     * @property {module:model/InboundRoute}
     */
    InboundRoute,

    /**
     * The InboundRouteActionType model constructor.
     * @property {module:model/InboundRouteActionType}
     */
    InboundRouteActionType,

    /**
     * The InboundRouteFilterType model constructor.
     * @property {module:model/InboundRouteFilterType}
     */
    InboundRouteFilterType,

    /**
     * The ListPayload model constructor.
     * @property {module:model/ListPayload}
     */
    ListPayload,

    /**
     * The ListUpdatePayload model constructor.
     * @property {module:model/ListUpdatePayload}
     */
    ListUpdatePayload,

    /**
     * The LogJobStatus model constructor.
     * @property {module:model/LogJobStatus}
     */
    LogJobStatus,

    /**
     * The LogStatusSummary model constructor.
     * @property {module:model/LogStatusSummary}
     */
    LogStatusSummary,

    /**
     * The MergeEmailPayload model constructor.
     * @property {module:model/MergeEmailPayload}
     */
    MergeEmailPayload,

    /**
     * The MessageAttachment model constructor.
     * @property {module:model/MessageAttachment}
     */
    MessageAttachment,

    /**
     * The MessageCategory model constructor.
     * @property {module:model/MessageCategory}
     */
    MessageCategory,

    /**
     * The NewApiKey model constructor.
     * @property {module:model/NewApiKey}
     */
    NewApiKey,

    /**
     * The NewSmtpCredentials model constructor.
     * @property {module:model/NewSmtpCredentials}
     */
    NewSmtpCredentials,

    /**
     * The Options model constructor.
     * @property {module:model/Options}
     */
    Options,

    /**
     * The RecipientEvent model constructor.
     * @property {module:model/RecipientEvent}
     */
    RecipientEvent,

    /**
     * The Segment model constructor.
     * @property {module:model/Segment}
     */
    Segment,

    /**
     * The SegmentPayload model constructor.
     * @property {module:model/SegmentPayload}
     */
    SegmentPayload,

    /**
     * The SmtpCredentials model constructor.
     * @property {module:model/SmtpCredentials}
     */
    SmtpCredentials,

    /**
     * The SmtpCredentialsPayload model constructor.
     * @property {module:model/SmtpCredentialsPayload}
     */
    SmtpCredentialsPayload,

    /**
     * The SortOrderItem model constructor.
     * @property {module:model/SortOrderItem}
     */
    SortOrderItem,

    /**
     * The SplitOptimizationType model constructor.
     * @property {module:model/SplitOptimizationType}
     */
    SplitOptimizationType,

    /**
     * The SplitOptions model constructor.
     * @property {module:model/SplitOptions}
     */
    SplitOptions,

    /**
     * The SubAccountInfo model constructor.
     * @property {module:model/SubAccountInfo}
     */
    SubAccountInfo,

    /**
     * The SubaccountEmailCreditsPayload model constructor.
     * @property {module:model/SubaccountEmailCreditsPayload}
     */
    SubaccountEmailCreditsPayload,

    /**
     * The SubaccountEmailSettings model constructor.
     * @property {module:model/SubaccountEmailSettings}
     */
    SubaccountEmailSettings,

    /**
     * The SubaccountEmailSettingsPayload model constructor.
     * @property {module:model/SubaccountEmailSettingsPayload}
     */
    SubaccountEmailSettingsPayload,

    /**
     * The SubaccountPayload model constructor.
     * @property {module:model/SubaccountPayload}
     */
    SubaccountPayload,

    /**
     * The SubaccountSettingsInfo model constructor.
     * @property {module:model/SubaccountSettingsInfo}
     */
    SubaccountSettingsInfo,

    /**
     * The SubaccountSettingsInfoPayload model constructor.
     * @property {module:model/SubaccountSettingsInfoPayload}
     */
    SubaccountSettingsInfoPayload,

    /**
     * The Suppression model constructor.
     * @property {module:model/Suppression}
     */
    Suppression,

    /**
     * The Template model constructor.
     * @property {module:model/Template}
     */
    Template,

    /**
     * The TemplatePayload model constructor.
     * @property {module:model/TemplatePayload}
     */
    TemplatePayload,

    /**
     * The TemplateScope model constructor.
     * @property {module:model/TemplateScope}
     */
    TemplateScope,

    /**
     * The TemplateType model constructor.
     * @property {module:model/TemplateType}
     */
    TemplateType,

    /**
     * The TransactionalRecipient model constructor.
     * @property {module:model/TransactionalRecipient}
     */
    TransactionalRecipient,

    /**
     * The Utm model constructor.
     * @property {module:model/Utm}
     */
    Utm,

    /**
     * The VerificationFileResult model constructor.
     * @property {module:model/VerificationFileResult}
     */
    VerificationFileResult,

    /**
     * The VerificationFileResultDetails model constructor.
     * @property {module:model/VerificationFileResultDetails}
     */
    VerificationFileResultDetails,

    /**
     * The VerificationStatus model constructor.
     * @property {module:model/VerificationStatus}
     */
    VerificationStatus,

    /**
    * The CampaignsApi service constructor.
    * @property {module:api/CampaignsApi}
    */
    CampaignsApi,

    /**
    * The ContactsApi service constructor.
    * @property {module:api/ContactsApi}
    */
    ContactsApi,

    /**
    * The EmailsApi service constructor.
    * @property {module:api/EmailsApi}
    */
    EmailsApi,

    /**
    * The EventsApi service constructor.
    * @property {module:api/EventsApi}
    */
    EventsApi,

    /**
    * The FilesApi service constructor.
    * @property {module:api/FilesApi}
    */
    FilesApi,

    /**
    * The InboundRouteApi service constructor.
    * @property {module:api/InboundRouteApi}
    */
    InboundRouteApi,

    /**
    * The ListsApi service constructor.
    * @property {module:api/ListsApi}
    */
    ListsApi,

    /**
    * The SecurityApi service constructor.
    * @property {module:api/SecurityApi}
    */
    SecurityApi,

    /**
    * The SegmentsApi service constructor.
    * @property {module:api/SegmentsApi}
    */
    SegmentsApi,

    /**
    * The StatisticsApi service constructor.
    * @property {module:api/StatisticsApi}
    */
    StatisticsApi,

    /**
    * The SubAccountsApi service constructor.
    * @property {module:api/SubAccountsApi}
    */
    SubAccountsApi,

    /**
    * The SuppressionsApi service constructor.
    * @property {module:api/SuppressionsApi}
    */
    SuppressionsApi,

    /**
    * The TemplatesApi service constructor.
    * @property {module:api/TemplatesApi}
    */
    TemplatesApi,

    /**
    * The VerificationsApi service constructor.
    * @property {module:api/VerificationsApi}
    */
    VerificationsApi
};
