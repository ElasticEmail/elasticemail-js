# @elasticemail/elasticemail-client

ElasticEmail - JavaScript client for @elasticemail/elasticemail-client
This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.

Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.

The API has a limit of 20 concurrent connections and a hard timeout of 600 seconds per request.

To start using this API, you will need your Access Token (available [here](https://elasticemail.com/account#/settings/new/manage-api)). Remember to keep it safe. Required access levels are listed in the given request’s description.

This is the documentation for REST API. If you’d like to read our legacy documentation regarding Web API v2 click [here](https://api.elasticemail.com/public/help).

Downloadable library clients can be found in our Github repository [here](https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 4.0.0
- Package version: 4.0.15
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @elasticemail/elasticemail-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your @elasticemail/elasticemail-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/elasticemail/elasticemail-js
then install it via:

```shell
    npm install elasticemail/elasticemail-js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ElasticEmail = require('@elasticemail/elasticemail-client');

var defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix['X-ElasticEmail-ApiKey'] = "Token"

var api = new ElasticEmail.CampaignsApi()
var name = "name_example"; // {String} Name of Campaign to delete
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.campaignsByNameDelete(name, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.elasticemail.com/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ElasticEmail.CampaignsApi* | [**campaignsByNameDelete**](docs/CampaignsApi.md#campaignsByNameDelete) | **DELETE** /campaigns/{name} | Delete Campaign
*ElasticEmail.CampaignsApi* | [**campaignsByNameGet**](docs/CampaignsApi.md#campaignsByNameGet) | **GET** /campaigns/{name} | Load Campaign
*ElasticEmail.CampaignsApi* | [**campaignsByNamePut**](docs/CampaignsApi.md#campaignsByNamePut) | **PUT** /campaigns/{name} | Update Campaign
*ElasticEmail.CampaignsApi* | [**campaignsGet**](docs/CampaignsApi.md#campaignsGet) | **GET** /campaigns | Load Campaigns
*ElasticEmail.CampaignsApi* | [**campaignsPost**](docs/CampaignsApi.md#campaignsPost) | **POST** /campaigns | Add Campaign
*ElasticEmail.ContactsApi* | [**contactsByEmailDelete**](docs/ContactsApi.md#contactsByEmailDelete) | **DELETE** /contacts/{email} | Delete Contact
*ElasticEmail.ContactsApi* | [**contactsByEmailGet**](docs/ContactsApi.md#contactsByEmailGet) | **GET** /contacts/{email} | Load Contact
*ElasticEmail.ContactsApi* | [**contactsByEmailHistoryGet**](docs/ContactsApi.md#contactsByEmailHistoryGet) | **GET** /contacts/{email}/history | Load History
*ElasticEmail.ContactsApi* | [**contactsByEmailPut**](docs/ContactsApi.md#contactsByEmailPut) | **PUT** /contacts/{email} | Update Contact
*ElasticEmail.ContactsApi* | [**contactsDeletePost**](docs/ContactsApi.md#contactsDeletePost) | **POST** /contacts/delete | Delete Contacts Bulk
*ElasticEmail.ContactsApi* | [**contactsExportByIdStatusGet**](docs/ContactsApi.md#contactsExportByIdStatusGet) | **GET** /contacts/export/{id}/status | Check Export Status
*ElasticEmail.ContactsApi* | [**contactsExportPost**](docs/ContactsApi.md#contactsExportPost) | **POST** /contacts/export | Export Contacts
*ElasticEmail.ContactsApi* | [**contactsGet**](docs/ContactsApi.md#contactsGet) | **GET** /contacts | Load Contacts
*ElasticEmail.ContactsApi* | [**contactsImportPost**](docs/ContactsApi.md#contactsImportPost) | **POST** /contacts/import | Upload Contacts
*ElasticEmail.ContactsApi* | [**contactsPost**](docs/ContactsApi.md#contactsPost) | **POST** /contacts | Add Contact
*ElasticEmail.EmailsApi* | [**emailsByMsgidViewGet**](docs/EmailsApi.md#emailsByMsgidViewGet) | **GET** /emails/{msgid}/view | View Email
*ElasticEmail.EmailsApi* | [**emailsMergefilePost**](docs/EmailsApi.md#emailsMergefilePost) | **POST** /emails/mergefile | Send Bulk Emails CSV
*ElasticEmail.EmailsApi* | [**emailsPost**](docs/EmailsApi.md#emailsPost) | **POST** /emails | Send Bulk Emails
*ElasticEmail.EmailsApi* | [**emailsTransactionalPost**](docs/EmailsApi.md#emailsTransactionalPost) | **POST** /emails/transactional | Send Transactional Email
*ElasticEmail.EventsApi* | [**eventsByTransactionidGet**](docs/EventsApi.md#eventsByTransactionidGet) | **GET** /events/{transactionid} | Load Email Events
*ElasticEmail.EventsApi* | [**eventsChannelsByNameExportPost**](docs/EventsApi.md#eventsChannelsByNameExportPost) | **POST** /events/channels/{name}/export | Export Channel Events
*ElasticEmail.EventsApi* | [**eventsChannelsByNameGet**](docs/EventsApi.md#eventsChannelsByNameGet) | **GET** /events/channels/{name} | Load Channel Events
*ElasticEmail.EventsApi* | [**eventsChannelsExportByIdStatusGet**](docs/EventsApi.md#eventsChannelsExportByIdStatusGet) | **GET** /events/channels/export/{id}/status | Check Channel Export Status
*ElasticEmail.EventsApi* | [**eventsExportByIdStatusGet**](docs/EventsApi.md#eventsExportByIdStatusGet) | **GET** /events/export/{id}/status | Check Export Status
*ElasticEmail.EventsApi* | [**eventsExportPost**](docs/EventsApi.md#eventsExportPost) | **POST** /events/export | Export Events
*ElasticEmail.EventsApi* | [**eventsGet**](docs/EventsApi.md#eventsGet) | **GET** /events | Load Events
*ElasticEmail.FilesApi* | [**filesByNameDelete**](docs/FilesApi.md#filesByNameDelete) | **DELETE** /files/{name} | Delete File
*ElasticEmail.FilesApi* | [**filesByNameGet**](docs/FilesApi.md#filesByNameGet) | **GET** /files/{name} | Download File
*ElasticEmail.FilesApi* | [**filesByNameInfoGet**](docs/FilesApi.md#filesByNameInfoGet) | **GET** /files/{name}/info | Load File Details
*ElasticEmail.FilesApi* | [**filesGet**](docs/FilesApi.md#filesGet) | **GET** /files | List Files
*ElasticEmail.FilesApi* | [**filesPost**](docs/FilesApi.md#filesPost) | **POST** /files | Upload File
*ElasticEmail.InboundRouteApi* | [**inboundrouteByIdDelete**](docs/InboundRouteApi.md#inboundrouteByIdDelete) | **DELETE** /inboundroute/{id} | Delete Route
*ElasticEmail.InboundRouteApi* | [**inboundrouteByIdGet**](docs/InboundRouteApi.md#inboundrouteByIdGet) | **GET** /inboundroute/{id} | Get Route
*ElasticEmail.InboundRouteApi* | [**inboundrouteByIdPut**](docs/InboundRouteApi.md#inboundrouteByIdPut) | **PUT** /inboundroute/{id} | Update Route
*ElasticEmail.InboundRouteApi* | [**inboundrouteGet**](docs/InboundRouteApi.md#inboundrouteGet) | **GET** /inboundroute | Get Routes
*ElasticEmail.InboundRouteApi* | [**inboundrouteOrderPut**](docs/InboundRouteApi.md#inboundrouteOrderPut) | **PUT** /inboundroute/order | Update Sorting
*ElasticEmail.InboundRouteApi* | [**inboundroutePost**](docs/InboundRouteApi.md#inboundroutePost) | **POST** /inboundroute | Create Route
*ElasticEmail.ListsApi* | [**listsByNameContactsPost**](docs/ListsApi.md#listsByNameContactsPost) | **POST** /lists/{name}/contacts | Add Contacts to List
*ElasticEmail.ListsApi* | [**listsByNameContactsRemovePost**](docs/ListsApi.md#listsByNameContactsRemovePost) | **POST** /lists/{name}/contacts/remove | Remove Contacts from List
*ElasticEmail.ListsApi* | [**listsByNameDelete**](docs/ListsApi.md#listsByNameDelete) | **DELETE** /lists/{name} | Delete List
*ElasticEmail.ListsApi* | [**listsByNameGet**](docs/ListsApi.md#listsByNameGet) | **GET** /lists/{name} | Load List
*ElasticEmail.ListsApi* | [**listsByNamePut**](docs/ListsApi.md#listsByNamePut) | **PUT** /lists/{name} | Update List
*ElasticEmail.ListsApi* | [**listsGet**](docs/ListsApi.md#listsGet) | **GET** /lists | Load Lists
*ElasticEmail.ListsApi* | [**listsPost**](docs/ListsApi.md#listsPost) | **POST** /lists | Add List
*ElasticEmail.SecurityApi* | [**securityApikeysByNameDelete**](docs/SecurityApi.md#securityApikeysByNameDelete) | **DELETE** /security/apikeys/{name} | Delete ApiKey
*ElasticEmail.SecurityApi* | [**securityApikeysByNameGet**](docs/SecurityApi.md#securityApikeysByNameGet) | **GET** /security/apikeys/{name} | Load ApiKey
*ElasticEmail.SecurityApi* | [**securityApikeysByNamePut**](docs/SecurityApi.md#securityApikeysByNamePut) | **PUT** /security/apikeys/{name} | Update ApiKey
*ElasticEmail.SecurityApi* | [**securityApikeysGet**](docs/SecurityApi.md#securityApikeysGet) | **GET** /security/apikeys | List ApiKeys
*ElasticEmail.SecurityApi* | [**securityApikeysPost**](docs/SecurityApi.md#securityApikeysPost) | **POST** /security/apikeys | Add ApiKey
*ElasticEmail.SecurityApi* | [**securitySmtpByNameDelete**](docs/SecurityApi.md#securitySmtpByNameDelete) | **DELETE** /security/smtp/{name} | Delete SMTP Credential
*ElasticEmail.SecurityApi* | [**securitySmtpByNameGet**](docs/SecurityApi.md#securitySmtpByNameGet) | **GET** /security/smtp/{name} | Load SMTP Credential
*ElasticEmail.SecurityApi* | [**securitySmtpByNamePut**](docs/SecurityApi.md#securitySmtpByNamePut) | **PUT** /security/smtp/{name} | Update SMTP Credential
*ElasticEmail.SecurityApi* | [**securitySmtpGet**](docs/SecurityApi.md#securitySmtpGet) | **GET** /security/smtp | List SMTP Credentials
*ElasticEmail.SecurityApi* | [**securitySmtpPost**](docs/SecurityApi.md#securitySmtpPost) | **POST** /security/smtp | Add SMTP Credential
*ElasticEmail.SegmentsApi* | [**segmentsByNameDelete**](docs/SegmentsApi.md#segmentsByNameDelete) | **DELETE** /segments/{name} | Delete Segment
*ElasticEmail.SegmentsApi* | [**segmentsByNameGet**](docs/SegmentsApi.md#segmentsByNameGet) | **GET** /segments/{name} | Load Segment
*ElasticEmail.SegmentsApi* | [**segmentsByNamePut**](docs/SegmentsApi.md#segmentsByNamePut) | **PUT** /segments/{name} | Update Segment
*ElasticEmail.SegmentsApi* | [**segmentsGet**](docs/SegmentsApi.md#segmentsGet) | **GET** /segments | Load Segments
*ElasticEmail.SegmentsApi* | [**segmentsPost**](docs/SegmentsApi.md#segmentsPost) | **POST** /segments | Add Segment
*ElasticEmail.StatisticsApi* | [**statisticsCampaignsByNameGet**](docs/StatisticsApi.md#statisticsCampaignsByNameGet) | **GET** /statistics/campaigns/{name} | Load Campaign Stats
*ElasticEmail.StatisticsApi* | [**statisticsCampaignsGet**](docs/StatisticsApi.md#statisticsCampaignsGet) | **GET** /statistics/campaigns | Load Campaigns Stats
*ElasticEmail.StatisticsApi* | [**statisticsChannelsByNameGet**](docs/StatisticsApi.md#statisticsChannelsByNameGet) | **GET** /statistics/channels/{name} | Load Channel Stats
*ElasticEmail.StatisticsApi* | [**statisticsChannelsGet**](docs/StatisticsApi.md#statisticsChannelsGet) | **GET** /statistics/channels | Load Channels Stats
*ElasticEmail.StatisticsApi* | [**statisticsGet**](docs/StatisticsApi.md#statisticsGet) | **GET** /statistics | Load Statistics
*ElasticEmail.SubAccountsApi* | [**subaccountsByEmailCreditsPatch**](docs/SubAccountsApi.md#subaccountsByEmailCreditsPatch) | **PATCH** /subaccounts/{email}/credits | Add, Subtract Email Credits
*ElasticEmail.SubAccountsApi* | [**subaccountsByEmailDelete**](docs/SubAccountsApi.md#subaccountsByEmailDelete) | **DELETE** /subaccounts/{email} | Delete SubAccount
*ElasticEmail.SubAccountsApi* | [**subaccountsByEmailGet**](docs/SubAccountsApi.md#subaccountsByEmailGet) | **GET** /subaccounts/{email} | Load SubAccount
*ElasticEmail.SubAccountsApi* | [**subaccountsByEmailSettingsEmailPut**](docs/SubAccountsApi.md#subaccountsByEmailSettingsEmailPut) | **PUT** /subaccounts/{email}/settings/email | Update SubAccount Email Settings
*ElasticEmail.SubAccountsApi* | [**subaccountsGet**](docs/SubAccountsApi.md#subaccountsGet) | **GET** /subaccounts | Load SubAccounts
*ElasticEmail.SubAccountsApi* | [**subaccountsPost**](docs/SubAccountsApi.md#subaccountsPost) | **POST** /subaccounts | Add SubAccount
*ElasticEmail.SuppressionsApi* | [**suppressionsBouncesGet**](docs/SuppressionsApi.md#suppressionsBouncesGet) | **GET** /suppressions/bounces | Get Bounce List
*ElasticEmail.SuppressionsApi* | [**suppressionsBouncesImportPost**](docs/SuppressionsApi.md#suppressionsBouncesImportPost) | **POST** /suppressions/bounces/import | Add Bounces Async
*ElasticEmail.SuppressionsApi* | [**suppressionsBouncesPost**](docs/SuppressionsApi.md#suppressionsBouncesPost) | **POST** /suppressions/bounces | Add Bounces
*ElasticEmail.SuppressionsApi* | [**suppressionsByEmailDelete**](docs/SuppressionsApi.md#suppressionsByEmailDelete) | **DELETE** /suppressions/{email} | Delete Suppression
*ElasticEmail.SuppressionsApi* | [**suppressionsByEmailGet**](docs/SuppressionsApi.md#suppressionsByEmailGet) | **GET** /suppressions/{email} | Get Suppression
*ElasticEmail.SuppressionsApi* | [**suppressionsComplaintsGet**](docs/SuppressionsApi.md#suppressionsComplaintsGet) | **GET** /suppressions/complaints | Get Complaints List
*ElasticEmail.SuppressionsApi* | [**suppressionsComplaintsImportPost**](docs/SuppressionsApi.md#suppressionsComplaintsImportPost) | **POST** /suppressions/complaints/import | Add Complaints Async
*ElasticEmail.SuppressionsApi* | [**suppressionsComplaintsPost**](docs/SuppressionsApi.md#suppressionsComplaintsPost) | **POST** /suppressions/complaints | Add Complaints
*ElasticEmail.SuppressionsApi* | [**suppressionsGet**](docs/SuppressionsApi.md#suppressionsGet) | **GET** /suppressions | Get Suppressions
*ElasticEmail.SuppressionsApi* | [**suppressionsUnsubscribesGet**](docs/SuppressionsApi.md#suppressionsUnsubscribesGet) | **GET** /suppressions/unsubscribes | Get Unsubscribes List
*ElasticEmail.SuppressionsApi* | [**suppressionsUnsubscribesImportPost**](docs/SuppressionsApi.md#suppressionsUnsubscribesImportPost) | **POST** /suppressions/unsubscribes/import | Add Unsubscribes Async
*ElasticEmail.SuppressionsApi* | [**suppressionsUnsubscribesPost**](docs/SuppressionsApi.md#suppressionsUnsubscribesPost) | **POST** /suppressions/unsubscribes | Add Unsubscribes
*ElasticEmail.TemplatesApi* | [**templatesByNameDelete**](docs/TemplatesApi.md#templatesByNameDelete) | **DELETE** /templates/{name} | Delete Template
*ElasticEmail.TemplatesApi* | [**templatesByNameGet**](docs/TemplatesApi.md#templatesByNameGet) | **GET** /templates/{name} | Load Template
*ElasticEmail.TemplatesApi* | [**templatesByNamePut**](docs/TemplatesApi.md#templatesByNamePut) | **PUT** /templates/{name} | Update Template
*ElasticEmail.TemplatesApi* | [**templatesGet**](docs/TemplatesApi.md#templatesGet) | **GET** /templates | Load Templates
*ElasticEmail.TemplatesApi* | [**templatesPost**](docs/TemplatesApi.md#templatesPost) | **POST** /templates | Add Template
*ElasticEmail.VerificationsApi* | [**verificationsByEmailDelete**](docs/VerificationsApi.md#verificationsByEmailDelete) | **DELETE** /verifications/{email} | Delete Email Verification Result
*ElasticEmail.VerificationsApi* | [**verificationsByEmailGet**](docs/VerificationsApi.md#verificationsByEmailGet) | **GET** /verifications/{email} | Get Email Verification Result
*ElasticEmail.VerificationsApi* | [**verificationsByEmailPost**](docs/VerificationsApi.md#verificationsByEmailPost) | **POST** /verifications/{email} | Verify Email
*ElasticEmail.VerificationsApi* | [**verificationsFilesByIdDelete**](docs/VerificationsApi.md#verificationsFilesByIdDelete) | **DELETE** /verifications/files/{id} | Delete File Verification Result
*ElasticEmail.VerificationsApi* | [**verificationsFilesByIdResultDownloadGet**](docs/VerificationsApi.md#verificationsFilesByIdResultDownloadGet) | **GET** /verifications/files/{id}/result/download | Download File Verification Result
*ElasticEmail.VerificationsApi* | [**verificationsFilesByIdResultGet**](docs/VerificationsApi.md#verificationsFilesByIdResultGet) | **GET** /verifications/files/{id}/result | Get Detailed File Verification Result
*ElasticEmail.VerificationsApi* | [**verificationsFilesByIdVerificationPost**](docs/VerificationsApi.md#verificationsFilesByIdVerificationPost) | **POST** /verifications/files/{id}/verification | Start verification
*ElasticEmail.VerificationsApi* | [**verificationsFilesPost**](docs/VerificationsApi.md#verificationsFilesPost) | **POST** /verifications/files | Upload File with Emails
*ElasticEmail.VerificationsApi* | [**verificationsFilesResultGet**](docs/VerificationsApi.md#verificationsFilesResultGet) | **GET** /verifications/files/result | Get Files Verification Results
*ElasticEmail.VerificationsApi* | [**verificationsGet**](docs/VerificationsApi.md#verificationsGet) | **GET** /verifications | Get Emails Verification Results


## Documentation for Models

 - [ElasticEmail.AccessLevel](docs/AccessLevel.md)
 - [ElasticEmail.AccountStatusEnum](docs/AccountStatusEnum.md)
 - [ElasticEmail.ApiKey](docs/ApiKey.md)
 - [ElasticEmail.ApiKeyPayload](docs/ApiKeyPayload.md)
 - [ElasticEmail.BodyContentType](docs/BodyContentType.md)
 - [ElasticEmail.BodyPart](docs/BodyPart.md)
 - [ElasticEmail.Campaign](docs/Campaign.md)
 - [ElasticEmail.CampaignOptions](docs/CampaignOptions.md)
 - [ElasticEmail.CampaignRecipient](docs/CampaignRecipient.md)
 - [ElasticEmail.CampaignStatus](docs/CampaignStatus.md)
 - [ElasticEmail.CampaignTemplate](docs/CampaignTemplate.md)
 - [ElasticEmail.ChannelLogStatusSummary](docs/ChannelLogStatusSummary.md)
 - [ElasticEmail.CompressionFormat](docs/CompressionFormat.md)
 - [ElasticEmail.ConsentData](docs/ConsentData.md)
 - [ElasticEmail.ConsentTracking](docs/ConsentTracking.md)
 - [ElasticEmail.Contact](docs/Contact.md)
 - [ElasticEmail.ContactActivity](docs/ContactActivity.md)
 - [ElasticEmail.ContactHistEventType](docs/ContactHistEventType.md)
 - [ElasticEmail.ContactHistory](docs/ContactHistory.md)
 - [ElasticEmail.ContactPayload](docs/ContactPayload.md)
 - [ElasticEmail.ContactSource](docs/ContactSource.md)
 - [ElasticEmail.ContactStatus](docs/ContactStatus.md)
 - [ElasticEmail.ContactUpdatePayload](docs/ContactUpdatePayload.md)
 - [ElasticEmail.ContactsList](docs/ContactsList.md)
 - [ElasticEmail.DeliveryOptimizationType](docs/DeliveryOptimizationType.md)
 - [ElasticEmail.EmailContent](docs/EmailContent.md)
 - [ElasticEmail.EmailData](docs/EmailData.md)
 - [ElasticEmail.EmailMessageData](docs/EmailMessageData.md)
 - [ElasticEmail.EmailRecipient](docs/EmailRecipient.md)
 - [ElasticEmail.EmailSend](docs/EmailSend.md)
 - [ElasticEmail.EmailStatus](docs/EmailStatus.md)
 - [ElasticEmail.EmailTransactionalMessageData](docs/EmailTransactionalMessageData.md)
 - [ElasticEmail.EmailValidationResult](docs/EmailValidationResult.md)
 - [ElasticEmail.EmailValidationStatus](docs/EmailValidationStatus.md)
 - [ElasticEmail.EmailView](docs/EmailView.md)
 - [ElasticEmail.EmailsPayload](docs/EmailsPayload.md)
 - [ElasticEmail.EncodingType](docs/EncodingType.md)
 - [ElasticEmail.EventType](docs/EventType.md)
 - [ElasticEmail.EventsOrderBy](docs/EventsOrderBy.md)
 - [ElasticEmail.ExportFileFormats](docs/ExportFileFormats.md)
 - [ElasticEmail.ExportLink](docs/ExportLink.md)
 - [ElasticEmail.ExportStatus](docs/ExportStatus.md)
 - [ElasticEmail.FileInfo](docs/FileInfo.md)
 - [ElasticEmail.FilePayload](docs/FilePayload.md)
 - [ElasticEmail.FileUploadResult](docs/FileUploadResult.md)
 - [ElasticEmail.InboundPayload](docs/InboundPayload.md)
 - [ElasticEmail.InboundRoute](docs/InboundRoute.md)
 - [ElasticEmail.InboundRouteActionType](docs/InboundRouteActionType.md)
 - [ElasticEmail.InboundRouteFilterType](docs/InboundRouteFilterType.md)
 - [ElasticEmail.ListPayload](docs/ListPayload.md)
 - [ElasticEmail.ListUpdatePayload](docs/ListUpdatePayload.md)
 - [ElasticEmail.LogJobStatus](docs/LogJobStatus.md)
 - [ElasticEmail.LogStatusSummary](docs/LogStatusSummary.md)
 - [ElasticEmail.MergeEmailPayload](docs/MergeEmailPayload.md)
 - [ElasticEmail.MessageAttachment](docs/MessageAttachment.md)
 - [ElasticEmail.MessageCategory](docs/MessageCategory.md)
 - [ElasticEmail.NewApiKey](docs/NewApiKey.md)
 - [ElasticEmail.NewSmtpCredentials](docs/NewSmtpCredentials.md)
 - [ElasticEmail.Options](docs/Options.md)
 - [ElasticEmail.RecipientEvent](docs/RecipientEvent.md)
 - [ElasticEmail.Segment](docs/Segment.md)
 - [ElasticEmail.SegmentPayload](docs/SegmentPayload.md)
 - [ElasticEmail.SmtpCredentials](docs/SmtpCredentials.md)
 - [ElasticEmail.SmtpCredentialsPayload](docs/SmtpCredentialsPayload.md)
 - [ElasticEmail.SortOrderItem](docs/SortOrderItem.md)
 - [ElasticEmail.SplitOptimizationType](docs/SplitOptimizationType.md)
 - [ElasticEmail.SplitOptions](docs/SplitOptions.md)
 - [ElasticEmail.SubAccountInfo](docs/SubAccountInfo.md)
 - [ElasticEmail.SubaccountEmailCreditsPayload](docs/SubaccountEmailCreditsPayload.md)
 - [ElasticEmail.SubaccountEmailSettings](docs/SubaccountEmailSettings.md)
 - [ElasticEmail.SubaccountEmailSettingsPayload](docs/SubaccountEmailSettingsPayload.md)
 - [ElasticEmail.SubaccountPayload](docs/SubaccountPayload.md)
 - [ElasticEmail.SubaccountSettingsInfo](docs/SubaccountSettingsInfo.md)
 - [ElasticEmail.SubaccountSettingsInfoPayload](docs/SubaccountSettingsInfoPayload.md)
 - [ElasticEmail.Suppression](docs/Suppression.md)
 - [ElasticEmail.Template](docs/Template.md)
 - [ElasticEmail.TemplatePayload](docs/TemplatePayload.md)
 - [ElasticEmail.TemplateScope](docs/TemplateScope.md)
 - [ElasticEmail.TemplateType](docs/TemplateType.md)
 - [ElasticEmail.TransactionalRecipient](docs/TransactionalRecipient.md)
 - [ElasticEmail.Utm](docs/Utm.md)
 - [ElasticEmail.VerificationFileResult](docs/VerificationFileResult.md)
 - [ElasticEmail.VerificationFileResultDetails](docs/VerificationFileResultDetails.md)
 - [ElasticEmail.VerificationStatus](docs/VerificationStatus.md)


## Documentation for Authorization



### apikey


- **Type**: API key
- **API key parameter name**: X-ElasticEmail-ApiKey
- **Location**: HTTP header

