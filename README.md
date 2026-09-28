<div align="center">

<img src=".github/ee-logo.png" alt="Elastic Email" width="96" />

# Elastic Email JavaScript SDK

The official JavaScript / Node.js client library for the [Elastic Email](https://elasticemail.com) REST API v4.

[![npm](https://img.shields.io/npm/v/@elasticemail/elasticemail-client?logo=npm&label=npm&color=CB3837)](https://www.npmjs.com/package/@elasticemail/elasticemail-client)
[![npm downloads](https://img.shields.io/npm/dm/@elasticemail/elasticemail-client?logo=npm&label=downloads&color=CB3837)](https://www.npmjs.com/package/@elasticemail/elasticemail-client)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D%207-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![API](https://img.shields.io/badge/API-v4-0A7BBB)](https://elasticemail.com/developers/api-documentation/rest-api)
[![OpenAPI Generator](https://img.shields.io/badge/generated%20by-OpenAPI%20Generator-6BA539?logo=openapiinitiative&logoColor=white)](https://openapi-generator.tech)
[![License: MIT](https://img.shields.io/github/license/ElasticEmail/elasticemail-js?color=yellow)](LICENSE)

[![Latest release](https://img.shields.io/github/v/release/ElasticEmail/elasticemail-js?logo=github&label=release)](https://github.com/ElasticEmail/elasticemail-js/releases)
[![Last commit](https://img.shields.io/github/last-commit/ElasticEmail/elasticemail-js?logo=github)](https://github.com/ElasticEmail/elasticemail-js/commits/master)
[![Open issues](https://img.shields.io/github/issues/ElasticEmail/elasticemail-js?logo=github)](https://github.com/ElasticEmail/elasticemail-js/issues)
[![GitHub stars](https://img.shields.io/github/stars/ElasticEmail/elasticemail-js?style=flat&logo=github)](https://github.com/ElasticEmail/elasticemail-js/stargazers)

[Installation](#installation) •
[Quick start](#quick-start) •
[Examples](#more-examples) •
[API reference](#api-reference) •
[Models](#models) •
[Contributing](#contributing)

</div>

---

## Features

- **Transactional and bulk email.** Send single messages, bulk campaigns or CSV merge-file sends.
- **Contacts, lists and segments.** Add, update, import, export and bulk-delete contacts.
- **Campaigns and automations.** Create, update, pause and trigger automations for a contact.
- **Templates, files and attachments.** Manage templates and uploaded files.
- **Domains.** Verify sending domains and check SPF, DKIM, tracking and certificate status.
- **Webhooks and inbound routes.** Receive delivery events and route incoming mail.
- **Statistics, events and suppressions.** Track delivery, bounces, complaints and unsubscribes.
- **Subaccounts and security.** Manage subaccounts and API keys.
- **Node.js and browsers.** Built on [superagent](https://github.com/ladjs/superagent), so it runs in Node.js and in bundlers such as webpack or browserify.

## Requirements

| Platform | Version |
| --- | --- |
| Node.js | 7 or later (required by superagent 5); current LTS recommended |
| Browsers | Via a bundler (webpack, browserify). See [Browser and webpack](#browser-and-webpack) |

You'll also need an Elastic Email **API key**. You can create one in your [API settings](https://app.elasticemail.com/marketing/settings/new/manage-api). Each endpoint's documentation lists the access level it needs.

## Installation

Install the [`@elasticemail/elasticemail-client`](https://www.npmjs.com/package/@elasticemail/elasticemail-client) package from npm:

```bash
npm install @elasticemail/elasticemail-client
```

Or with yarn or pnpm:

```bash
yarn add @elasticemail/elasticemail-client
pnpm add @elasticemail/elasticemail-client
```

npm installs the runtime dependency ([superagent](https://www.npmjs.com/package/superagent)) for you. The package ships prebuilt CommonJS in `dist/`, so there's nothing to compile.

## Quick start

### Configure the client

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;
client.authentications['apikey'].apiKey = process.env.ELASTICEMAIL_API_KEY;
```

> [!TIP]
> Keep your API key out of source code. Load it from an environment variable, a `.env` file that isn't committed, or a secrets manager.

### Send a transactional email

```javascript
const emails = new ElasticEmail.EmailsApi();

const message = {
  Recipients: {
    To: ['john.doe@example.com'],
  },
  Content: {
    From: 'My App <no-reply@yourdomain.com>',
    Subject: 'Welcome aboard!',
    Body: [
      { ContentType: 'HTML', Content: '<h1>Hello!</h1><p>Thanks for signing up.</p>' },
      { ContentType: 'PlainText', Content: 'Hello! Thanks for signing up.' },
    ],
  },
};

emails.emailsTransactionalPost(message, (error, data, response) => {
  if (error) {
    console.error(`Elastic Email API error ${error.status}:`, response && response.text);
    return;
  }
  console.log(`Sent. TransactionID: ${data.TransactionID}, MessageID: ${data.MessageID}`);
});
```

The `from` address must use a domain you've verified in your Elastic Email account.

> [!NOTE]
> Request bodies are sent as JSON exactly as you pass them, so use the API's PascalCase field names (`Recipients`, `Content`, `From`…). Response objects use the same names (`data.TransactionID`).

### Use promises and `async`/`await`

API methods take a Node-style callback, so they work with `util.promisify`:

```javascript
const { promisify } = require('util');

const sendTransactional = promisify(emails.emailsTransactionalPost.bind(emails));

const result = await sendTransactional(message);
console.log(result.TransactionID);
```

### Send from a template with merge fields

```javascript
const message = {
  Recipients: { To: ['john.doe@example.com'] },
  Content: {
    From: 'My App <no-reply@yourdomain.com>',
    TemplateName: 'welcome-template',
    Merge: { firstname: 'John' },
  },
};

emails.emailsTransactionalPost(message, (error, data) => { /* ... */ });
```

### Timeouts, proxies and HTTP agents

`ApiClient` exposes the underlying superagent settings:

```javascript
const client = ElasticEmail.ApiClient.instance;

client.timeout = 30000;                      // ms, default 60000
client.defaultHeaders['X-My-Header'] = 'x';  // sent with every request

// Route requests through a proxy (npm install https-proxy-agent)
const { HttpsProxyAgent } = require('https-proxy-agent');
client.requestAgent = new HttpsProxyAgent('http://myProxyUrl:80/');
```

### Browser and webpack

The library works in the browser through a bundler. With webpack you may see `Module not found: Error: Cannot resolve module`. Disable the AMD loader to fix it:

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

> [!IMPORTANT]
> Never ship your API key to a browser. Call the Elastic Email API from your server and expose only what your front end needs.

## More examples

More complete, runnable samples are in the **[Elastic Email examples repository](https://github.com/ElasticEmail/elasticemail-examples)**. It covers transactional email, SMTP, webhooks, inbound email, contacts and serverless platforms across 20+ languages and frameworks.

- 🟢 [Node.js examples](https://github.com/ElasticEmail/elasticemail-examples/tree/main/nodejs-elasticemail-examples) (JavaScript and TypeScript)
- 📂 [All examples](https://github.com/ElasticEmail/elasticemail-examples)

<details>
<summary><strong>Snippets in this repository</strong></summary>

The [`examples/`](examples) folder has one small script per common task. See [examples/README.md](examples/README.md) for how to run them.

Function ||
------------ | ------------- 
[addCampaign](examples/functions/addCampaign.js) | [readme](examples/functions/addCampaign.md)
[addContacts](examples/functions/addContacts.js) | [readme](examples/functions/addContacts.md)
[addList](examples/functions/addList.js) | [readme](examples/functions/addList.md)
[addTemplate](examples/functions/addTemplate.js) | [readme](examples/functions/addTemplate.md)
[deleteCampaign](examples/functions/deleteCampaign.js) | [readme](examples/functions/deleteCampaign.md)
[deleteContact](examples/functions/deleteContact.js) | [readme](examples/functions/deleteContact.md)
[deleteList](examples/functions/deleteList.js) | [readme](examples/functions/deleteList.md)
[deleteTemplate](examples/functions/deleteTemplate.js) | [readme](examples/functions/deleteTemplate.md)
[exportContacts](examples/functions/exportContacts.js) | [readme](examples/functions/exportContacts.md)
[loadCampaign](examples/functions/loadCampaign.js) | [readme](examples/functions/loadCampaign.md)
[loadCampaignsStats](examples/functions/loadCampaignsStats.js) | [readme](examples/functions/loadCampaignsStats.md)
[loadChannelsStats](examples/functions/loadChannelsStats.js) | [readme](examples/functions/loadChannelsStats.md)
[loadList](examples/functions/loadList.js) | [readme](examples/functions/loadList.md)
[loadStatistics](examples/functions/loadStatistics.js) | [readme](examples/functions/loadStatistics.md)
[loadTemplate](examples/functions/loadTemplate.js) | [readme](examples/functions/loadTemplate.md)
[sendBulkEmails](examples/functions/sendBulkEmails.js) | [readme](examples/functions/sendBulkEmails.md)
[sendTransactionalEmails](examples/functions/sendTransactionalEmails.js) | [readme](examples/functions/sendTransactionalEmails.md)
[updateCampaign](examples/functions/updateCampaign.js) | [readme](examples/functions/updateCampaign.md)
[uploadContacts](examples/functions/uploadContacts.js) | [readme](examples/functions/uploadContacts.md)

</details>

## Authentication

| Scheme | Header | Used for |
| --- | --- | --- |
| `apikey` | `X-ElasticEmail-ApiKey` | All standard API calls |
| `ApiKeyAuthCustomBranding` | `X-Auth-Token` | Custom-branding (white-label) accounts |

## API limits

- Up to **20 concurrent connections** per account
- A hard timeout of **600 seconds** per request

## API reference

All URIs are relative to `https://api.elasticemail.com/v4`. The SDK covers **114 endpoints** across 16 API classes: `CampaignsApi`, `ContactsApi`, `DomainsApi`, `EmailsApi`, `EventsApi`, `FilesApi`, `InboundRouteApi`, `ListsApi`, `SecurityApi`, `SegmentsApi`, `StatisticsApi`, `SubAccountsApi`, `SuppressionsApi`, `TemplatesApi`, `VerificationsApi` and `WebhookApi`.

<details>
<summary><strong>Show all endpoints</strong></summary>

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ElasticEmail.CampaignsApi* | [**campaignsAutomationByNameTriggerPost**](docs/CampaignsApi.md#campaignsAutomationByNameTriggerPost) | **POST** /campaigns/automation/{name}/trigger | Trigger Automation for Contact
*ElasticEmail.CampaignsApi* | [**campaignsByNameDelete**](docs/CampaignsApi.md#campaignsByNameDelete) | **DELETE** /campaigns/{name} | Delete Campaign
*ElasticEmail.CampaignsApi* | [**campaignsByNameGet**](docs/CampaignsApi.md#campaignsByNameGet) | **GET** /campaigns/{name} | Load Campaign
*ElasticEmail.CampaignsApi* | [**campaignsByNamePausePut**](docs/CampaignsApi.md#campaignsByNamePausePut) | **PUT** /campaigns/{name}/pause | Pause Campaign
*ElasticEmail.CampaignsApi* | [**campaignsByNamePut**](docs/CampaignsApi.md#campaignsByNamePut) | **PUT** /campaigns/{name} | Update Campaign
*ElasticEmail.CampaignsApi* | [**campaignsGet**](docs/CampaignsApi.md#campaignsGet) | **GET** /campaigns | Load Campaigns
*ElasticEmail.CampaignsApi* | [**campaignsPost**](docs/CampaignsApi.md#campaignsPost) | **POST** /campaigns | Add Campaign
*ElasticEmail.ContactsApi* | [**contactsByEmailDelete**](docs/ContactsApi.md#contactsByEmailDelete) | **DELETE** /contacts/{email} | Delete Contact
*ElasticEmail.ContactsApi* | [**contactsByEmailGet**](docs/ContactsApi.md#contactsByEmailGet) | **GET** /contacts/{email} | Load Contact
*ElasticEmail.ContactsApi* | [**contactsByEmailPut**](docs/ContactsApi.md#contactsByEmailPut) | **PUT** /contacts/{email} | Update Contact
*ElasticEmail.ContactsApi* | [**contactsDeletePost**](docs/ContactsApi.md#contactsDeletePost) | **POST** /contacts/delete | Delete Contacts Bulk
*ElasticEmail.ContactsApi* | [**contactsExportByIdStatusGet**](docs/ContactsApi.md#contactsExportByIdStatusGet) | **GET** /contacts/export/{id}/status | Check Export Status
*ElasticEmail.ContactsApi* | [**contactsExportPost**](docs/ContactsApi.md#contactsExportPost) | **POST** /contacts/export | Export Contacts
*ElasticEmail.ContactsApi* | [**contactsGet**](docs/ContactsApi.md#contactsGet) | **GET** /contacts | Load Contacts
*ElasticEmail.ContactsApi* | [**contactsImportPost**](docs/ContactsApi.md#contactsImportPost) | **POST** /contacts/import | Upload Contacts
*ElasticEmail.ContactsApi* | [**contactsPost**](docs/ContactsApi.md#contactsPost) | **POST** /contacts | Add Contact
*ElasticEmail.DomainsApi* | [**domainsByDomainDelete**](docs/DomainsApi.md#domainsByDomainDelete) | **DELETE** /domains/{domain} | Delete Domain
*ElasticEmail.DomainsApi* | [**domainsByDomainGet**](docs/DomainsApi.md#domainsByDomainGet) | **GET** /domains/{domain} | Load Domain
*ElasticEmail.DomainsApi* | [**domainsByDomainPut**](docs/DomainsApi.md#domainsByDomainPut) | **PUT** /domains/{domain} | Update Domain
*ElasticEmail.DomainsApi* | [**domainsByDomainRestrictedGet**](docs/DomainsApi.md#domainsByDomainRestrictedGet) | **GET** /domains/{domain}/restricted | Check for domain restriction
*ElasticEmail.DomainsApi* | [**domainsByDomainVerificationPut**](docs/DomainsApi.md#domainsByDomainVerificationPut) | **PUT** /domains/{domain}/verification | Verify Domain
*ElasticEmail.DomainsApi* | [**domainsByEmailDefaultPatch**](docs/DomainsApi.md#domainsByEmailDefaultPatch) | **PATCH** /domains/{email}/default | Set Default
*ElasticEmail.DomainsApi* | [**domainsGet**](docs/DomainsApi.md#domainsGet) | **GET** /domains | Load Domains
*ElasticEmail.DomainsApi* | [**domainsPost**](docs/DomainsApi.md#domainsPost) | **POST** /domains | Add Domain
*ElasticEmail.EmailsApi* | [**emailsByMsgidViewGet**](docs/EmailsApi.md#emailsByMsgidViewGet) | **GET** /emails/{msgid}/view | View Email
*ElasticEmail.EmailsApi* | [**emailsByTransactionidStatusGet**](docs/EmailsApi.md#emailsByTransactionidStatusGet) | **GET** /emails/{transactionid}/status | Get Status
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
*ElasticEmail.ListsApi* | [**listsByListnameContactsGet**](docs/ListsApi.md#listsByListnameContactsGet) | **GET** /lists/{listname}/contacts | Load Contacts in List
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
*ElasticEmail.SubAccountsApi* | [**subaccountsByEmailApikeyGet**](docs/SubAccountsApi.md#subaccountsByEmailApikeyGet) | **GET** /subaccounts/{email}/apikey | Get SubAccount ApiKey
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
*ElasticEmail.WebhookApi* | [**webhookByPublicidDelete**](docs/WebhookApi.md#webhookByPublicidDelete) | **DELETE** /webhook/{publicid} | Delete Webhook
*ElasticEmail.WebhookApi* | [**webhookByPublicidGet**](docs/WebhookApi.md#webhookByPublicidGet) | **GET** /webhook/{publicid} | Load Webhook
*ElasticEmail.WebhookApi* | [**webhookByPublicidPut**](docs/WebhookApi.md#webhookByPublicidPut) | **PUT** /webhook/{publicid} | Update Webhook
*ElasticEmail.WebhookApi* | [**webhookGet**](docs/WebhookApi.md#webhookGet) | **GET** /webhook | Load Webhooks
*ElasticEmail.WebhookApi* | [**webhookPost**](docs/WebhookApi.md#webhookPost) | **POST** /webhook | Add Webhook


</details>

## Models

<details>
<summary><strong>Show all 98 models</strong></summary>

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
 - [ElasticEmail.CertificateValidationStatus](docs/CertificateValidationStatus.md)
 - [ElasticEmail.ChannelLogStatusSummary](docs/ChannelLogStatusSummary.md)
 - [ElasticEmail.CompressionFormat](docs/CompressionFormat.md)
 - [ElasticEmail.ConsentData](docs/ConsentData.md)
 - [ElasticEmail.ConsentTracking](docs/ConsentTracking.md)
 - [ElasticEmail.Contact](docs/Contact.md)
 - [ElasticEmail.ContactActivity](docs/ContactActivity.md)
 - [ElasticEmail.ContactPayload](docs/ContactPayload.md)
 - [ElasticEmail.ContactSource](docs/ContactSource.md)
 - [ElasticEmail.ContactStatus](docs/ContactStatus.md)
 - [ElasticEmail.ContactUpdatePayload](docs/ContactUpdatePayload.md)
 - [ElasticEmail.ContactsList](docs/ContactsList.md)
 - [ElasticEmail.DKIMRecord](docs/DKIMRecord.md)
 - [ElasticEmail.DeliveryOptimizationType](docs/DeliveryOptimizationType.md)
 - [ElasticEmail.DomainData](docs/DomainData.md)
 - [ElasticEmail.DomainDetail](docs/DomainDetail.md)
 - [ElasticEmail.DomainOwner](docs/DomainOwner.md)
 - [ElasticEmail.DomainPayload](docs/DomainPayload.md)
 - [ElasticEmail.DomainUpdatePayload](docs/DomainUpdatePayload.md)
 - [ElasticEmail.EmailContent](docs/EmailContent.md)
 - [ElasticEmail.EmailData](docs/EmailData.md)
 - [ElasticEmail.EmailJobFailedStatus](docs/EmailJobFailedStatus.md)
 - [ElasticEmail.EmailJobStatus](docs/EmailJobStatus.md)
 - [ElasticEmail.EmailMessageData](docs/EmailMessageData.md)
 - [ElasticEmail.EmailPredictedValidationStatus](docs/EmailPredictedValidationStatus.md)
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
 - [ElasticEmail.MessageCategoryEnum](docs/MessageCategoryEnum.md)
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
 - [ElasticEmail.TrackingType](docs/TrackingType.md)
 - [ElasticEmail.TrackingValidationStatus](docs/TrackingValidationStatus.md)
 - [ElasticEmail.TransactionalRecipient](docs/TransactionalRecipient.md)
 - [ElasticEmail.Utm](docs/Utm.md)
 - [ElasticEmail.VerificationFileResult](docs/VerificationFileResult.md)
 - [ElasticEmail.VerificationFileResultDetails](docs/VerificationFileResultDetails.md)
 - [ElasticEmail.VerificationStatus](docs/VerificationStatus.md)
 - [ElasticEmail.Webhook](docs/Webhook.md)
 - [ElasticEmail.WebhookCreatePayload](docs/WebhookCreatePayload.md)
 - [ElasticEmail.WebhookUpdatePayload](docs/WebhookUpdatePayload.md)

</details>

## Tests

The generated test suite uses [Mocha](https://mochajs.org) and lives in [`test/`](test):

```bash
npm install
npm test
```

## Versioning

The SDK follows the Elastic Email API v4. Package versions are listed on [npm](https://www.npmjs.com/package/@elasticemail/elasticemail-client?activeTab=versions) and release notes in [GitHub Releases](https://github.com/ElasticEmail/elasticemail-js/releases).

<details>
<summary>Build details</summary>

- API version: 4.0.0
- SDK version: 4.2.0
- Generator version: 7.11.0
- Build package: `org.openapitools.codegen.languages.JavascriptClientCodegen`

</details>

## Contributing

Contributions are welcome! Most of this SDK is generated from the Elastic Email OpenAPI specification, so please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

- 🐛 [Report a bug](https://github.com/ElasticEmail/elasticemail-js/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/ElasticEmail/elasticemail-js/issues/new?template=feature_request.md)
- 🔒 [Report a security issue](SECURITY.md)

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

## Support

> [!IMPORTANT]
> The fastest way to get help is the **chat widget on [elasticemail.com](https://elasticemail.com)**. Our support team can help with your account, sending, deliverability and API questions.

- 💬 [Chat with support on elasticemail.com](https://elasticemail.com) (preferred)
- 📚 [API documentation](https://elasticemail.com/developers/api-documentation/rest-api)
- 🧪 [Examples repository](https://github.com/ElasticEmail/elasticemail-examples)
- 🐛 [GitHub issues](https://github.com/ElasticEmail/elasticemail-js/issues), for bugs in this SDK only

## License

Released under the [MIT License](LICENSE). Copyright © 2021–2026 Elastic Email.
