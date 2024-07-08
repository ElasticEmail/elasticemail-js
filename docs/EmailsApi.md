# ElasticEmail.EmailsApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emailsByMsgidViewGet**](EmailsApi.md#emailsByMsgidViewGet) | **GET** /emails/{msgid}/view | View Email
[**emailsByTransactionidStatusGet**](EmailsApi.md#emailsByTransactionidStatusGet) | **GET** /emails/{transactionid}/status | Get Status
[**emailsMergefilePost**](EmailsApi.md#emailsMergefilePost) | **POST** /emails/mergefile | Send Bulk Emails CSV
[**emailsPost**](EmailsApi.md#emailsPost) | **POST** /emails | Send Bulk Emails
[**emailsTransactionalPost**](EmailsApi.md#emailsTransactionalPost) | **POST** /emails/transactional | Send Transactional Email



## emailsByMsgidViewGet

> EmailData emailsByMsgidViewGet(msgid)

View Email

Returns email details for viewing or rendering. Required Access Level: None

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EmailsApi();
let msgid = "msgid_example"; // String | Message identifier
apiInstance.emailsByMsgidViewGet(msgid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **msgid** | **String**| Message identifier | 

### Return type

[**EmailData**](EmailData.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## emailsByTransactionidStatusGet

> EmailJobStatus emailsByTransactionidStatusGet(transactionid, opts)

Get Status

Get status details of an email transaction. Required Access Level: ViewReports

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EmailsApi();
let transactionid = "transactionid_example"; // String | Transaction identifier
let opts = {
  'showFailed': false, // Boolean | Include Bounced email addresses.
  'showSent': false, // Boolean | Include Sent email addresses.
  'showDelivered': false, // Boolean | Include all delivered email addresses.
  'showPending': false, // Boolean | Include Ready to send email addresses.
  'showOpened': false, // Boolean | Include Opened email addresses.
  'showClicked': false, // Boolean | Include Clicked email addresses.
  'showAbuse': false, // Boolean | Include Reported as abuse email addresses.
  'showUnsubscribed': false, // Boolean | Include Unsubscribed email addresses.
  'showErrors': false, // Boolean | Include error messages for bounced emails.
  'showMessageIDs': false // Boolean | Include all MessageIDs for this transaction
};
apiInstance.emailsByTransactionidStatusGet(transactionid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionid** | **String**| Transaction identifier | 
 **showFailed** | **Boolean**| Include Bounced email addresses. | [optional] [default to false]
 **showSent** | **Boolean**| Include Sent email addresses. | [optional] [default to false]
 **showDelivered** | **Boolean**| Include all delivered email addresses. | [optional] [default to false]
 **showPending** | **Boolean**| Include Ready to send email addresses. | [optional] [default to false]
 **showOpened** | **Boolean**| Include Opened email addresses. | [optional] [default to false]
 **showClicked** | **Boolean**| Include Clicked email addresses. | [optional] [default to false]
 **showAbuse** | **Boolean**| Include Reported as abuse email addresses. | [optional] [default to false]
 **showUnsubscribed** | **Boolean**| Include Unsubscribed email addresses. | [optional] [default to false]
 **showErrors** | **Boolean**| Include error messages for bounced emails. | [optional] [default to false]
 **showMessageIDs** | **Boolean**| Include all MessageIDs for this transaction | [optional] [default to false]

### Return type

[**EmailJobStatus**](EmailJobStatus.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## emailsMergefilePost

> EmailSend emailsMergefilePost(mergeEmailPayload)

Send Bulk Emails CSV

Send bulk merge email. Required Access Level: SendHttp

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EmailsApi();
let mergeEmailPayload = new ElasticEmail.MergeEmailPayload(); // MergeEmailPayload | Email data
apiInstance.emailsMergefilePost(mergeEmailPayload, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mergeEmailPayload** | [**MergeEmailPayload**](MergeEmailPayload.md)| Email data | 

### Return type

[**EmailSend**](EmailSend.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## emailsPost

> EmailSend emailsPost(emailMessageData)

Send Bulk Emails

Send bulk merge email. Required Access Level: SendHttp

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EmailsApi();
let emailMessageData = new ElasticEmail.EmailMessageData(); // EmailMessageData | Email data
apiInstance.emailsPost(emailMessageData, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailMessageData** | [**EmailMessageData**](EmailMessageData.md)| Email data | 

### Return type

[**EmailSend**](EmailSend.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## emailsTransactionalPost

> EmailSend emailsTransactionalPost(emailTransactionalMessageData)

Send Transactional Email

Send transactional emails (recipients will be known to each other). Required Access Level: SendHttp

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EmailsApi();
let emailTransactionalMessageData = new ElasticEmail.EmailTransactionalMessageData(); // EmailTransactionalMessageData | Email data
apiInstance.emailsTransactionalPost(emailTransactionalMessageData, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTransactionalMessageData** | [**EmailTransactionalMessageData**](EmailTransactionalMessageData.md)| Email data | 

### Return type

[**EmailSend**](EmailSend.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

