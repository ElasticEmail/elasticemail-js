# ElasticEmail.WebhookApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookByPublicidDelete**](WebhookApi.md#webhookByPublicidDelete) | **DELETE** /webhook/{publicid} | Delete Webhook
[**webhookByPublicidGet**](WebhookApi.md#webhookByPublicidGet) | **GET** /webhook/{publicid} | Load Webhook
[**webhookByPublicidPut**](WebhookApi.md#webhookByPublicidPut) | **PUT** /webhook/{publicid} | Update Webhook
[**webhookGet**](WebhookApi.md#webhookGet) | **GET** /webhook | Load Webhooks
[**webhookPost**](WebhookApi.md#webhookPost) | **POST** /webhook | Add Webhook



## webhookByPublicidDelete

> webhookByPublicidDelete(publicid)

Delete Webhook

Delete the specified notifications webhook. Required Access Level: ModifyWebNotifications

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.WebhookApi();
let publicid = "publicid_example"; // String | 
apiInstance.webhookByPublicidDelete(publicid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## webhookByPublicidGet

> Webhook webhookByPublicidGet(publicid)

Load Webhook

Load notifications webhook details. Required Access Level: ViewWebNotifications

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.WebhookApi();
let publicid = "publicid_example"; // String | 
apiInstance.webhookByPublicidGet(publicid, (error, data, response) => {
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
 **publicid** | **String**|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookByPublicidPut

> Webhook webhookByPublicidPut(publicid, webhookUpdatePayload)

Update Webhook

Update notification webhook. Required Access Level: ModifyWebNotifications

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.WebhookApi();
let publicid = "publicid_example"; // String | 
let webhookUpdatePayload = new ElasticEmail.WebhookUpdatePayload(); // WebhookUpdatePayload | 
apiInstance.webhookByPublicidPut(publicid, webhookUpdatePayload, (error, data, response) => {
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
 **publicid** | **String**|  | 
 **webhookUpdatePayload** | [**WebhookUpdatePayload**](WebhookUpdatePayload.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## webhookGet

> [Webhook] webhookGet(opts)

Load Webhooks

Returns a list of notification webhooks. Required Access Level: ViewWebNotifications

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.WebhookApi();
let opts = {
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.webhookGet(opts, (error, data, response) => {
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
 **limit** | **Number**| Maximum number of returned items. | [optional] 
 **offset** | **Number**| How many items should be returned ahead. | [optional] 

### Return type

[**[Webhook]**](Webhook.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookPost

> Webhook webhookPost(webhookCreatePayload)

Add Webhook

Add a notification webhook. Required Access Level: ModifyWebNotifications

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.WebhookApi();
let webhookCreatePayload = new ElasticEmail.WebhookCreatePayload(); // WebhookCreatePayload | 
apiInstance.webhookPost(webhookCreatePayload, (error, data, response) => {
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
 **webhookCreatePayload** | [**WebhookCreatePayload**](WebhookCreatePayload.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

