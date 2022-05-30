# ElasticEmail.SuppressionsApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suppressionsBouncesGet**](SuppressionsApi.md#suppressionsBouncesGet) | **GET** /suppressions/bounces | Get Bounce List
[**suppressionsBouncesImportPost**](SuppressionsApi.md#suppressionsBouncesImportPost) | **POST** /suppressions/bounces/import | Add Bounces Async
[**suppressionsBouncesPost**](SuppressionsApi.md#suppressionsBouncesPost) | **POST** /suppressions/bounces | Add Bounces
[**suppressionsByEmailDelete**](SuppressionsApi.md#suppressionsByEmailDelete) | **DELETE** /suppressions/{email} | Delete Suppression
[**suppressionsByEmailGet**](SuppressionsApi.md#suppressionsByEmailGet) | **GET** /suppressions/{email} | Get Suppression
[**suppressionsComplaintsGet**](SuppressionsApi.md#suppressionsComplaintsGet) | **GET** /suppressions/complaints | Get Complaints List
[**suppressionsComplaintsImportPost**](SuppressionsApi.md#suppressionsComplaintsImportPost) | **POST** /suppressions/complaints/import | Add Complaints Async
[**suppressionsComplaintsPost**](SuppressionsApi.md#suppressionsComplaintsPost) | **POST** /suppressions/complaints | Add Complaints
[**suppressionsGet**](SuppressionsApi.md#suppressionsGet) | **GET** /suppressions | Get Suppressions
[**suppressionsUnsubscribesGet**](SuppressionsApi.md#suppressionsUnsubscribesGet) | **GET** /suppressions/unsubscribes | Get Unsubscribes List
[**suppressionsUnsubscribesImportPost**](SuppressionsApi.md#suppressionsUnsubscribesImportPost) | **POST** /suppressions/unsubscribes/import | Add Unsubscribes Async
[**suppressionsUnsubscribesPost**](SuppressionsApi.md#suppressionsUnsubscribesPost) | **POST** /suppressions/unsubscribes | Add Unsubscribes



## suppressionsBouncesGet

> [Suppression] suppressionsBouncesGet(opts)

Get Bounce List

Retrieve your list of bounced emails. Required Access Level: ViewContacts, ViewSuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let opts = {
  'search': text, // String | Text fragment used for searching.
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.suppressionsBouncesGet(opts, (error, data, response) => {
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
 **search** | **String**| Text fragment used for searching. | [optional] 
 **limit** | **Number**| Maximum number of returned items. | [optional] 
 **offset** | **Number**| How many items should be returned ahead. | [optional] 

### Return type

[**[Suppression]**](Suppression.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## suppressionsBouncesImportPost

> suppressionsBouncesImportPost(opts)

Add Bounces Async

Add Bounced. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.suppressionsBouncesImportPost(opts, (error, data, response) => {
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
 **file** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## suppressionsBouncesPost

> [Suppression] suppressionsBouncesPost(requestBody)

Add Bounces

Add Bounced. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let requestBody = ["null"]; // [String] | Emails to add as bounces. Limited to 1000 per request
apiInstance.suppressionsBouncesPost(requestBody, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)| Emails to add as bounces. Limited to 1000 per request | 

### Return type

[**[Suppression]**](Suppression.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## suppressionsByEmailDelete

> suppressionsByEmailDelete(email)

Delete Suppression

Delete Suppression. Required Access Level: ViewContacts, ViewSuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let email = mail@example.com; // String | Proper email address.
apiInstance.suppressionsByEmailDelete(email, (error, data, response) => {
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
 **email** | **String**| Proper email address. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## suppressionsByEmailGet

> Suppression suppressionsByEmailGet(email)

Get Suppression

Retrieve your suppression. Required Access Level: ViewContacts, ViewSuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let email = mail@example.com; // String | Proper email address.
apiInstance.suppressionsByEmailGet(email, (error, data, response) => {
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
 **email** | **String**| Proper email address. | 

### Return type

[**Suppression**](Suppression.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## suppressionsComplaintsGet

> [Suppression] suppressionsComplaintsGet(opts)

Get Complaints List

Retrieve your list of complaints. Required Access Level: ViewContacts, ViewSuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let opts = {
  'search': text, // String | Text fragment used for searching.
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.suppressionsComplaintsGet(opts, (error, data, response) => {
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
 **search** | **String**| Text fragment used for searching. | [optional] 
 **limit** | **Number**| Maximum number of returned items. | [optional] 
 **offset** | **Number**| How many items should be returned ahead. | [optional] 

### Return type

[**[Suppression]**](Suppression.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## suppressionsComplaintsImportPost

> suppressionsComplaintsImportPost(opts)

Add Complaints Async

Add Complaints. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.suppressionsComplaintsImportPost(opts, (error, data, response) => {
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
 **file** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## suppressionsComplaintsPost

> [Suppression] suppressionsComplaintsPost(requestBody)

Add Complaints

Add Complaints. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let requestBody = ["null"]; // [String] | Emails to add as complaints. Limited to 1000 per request
apiInstance.suppressionsComplaintsPost(requestBody, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)| Emails to add as complaints. Limited to 1000 per request | 

### Return type

[**[Suppression]**](Suppression.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## suppressionsGet

> [Suppression] suppressionsGet(opts)

Get Suppressions

Retrieve your suppressions. Required Access Level: ViewContacts, ViewSuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let opts = {
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.suppressionsGet(opts, (error, data, response) => {
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

[**[Suppression]**](Suppression.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## suppressionsUnsubscribesGet

> [Suppression] suppressionsUnsubscribesGet(opts)

Get Unsubscribes List

Retrieve your list of unsubscribes. Required Access Level: ViewContacts, ViewSuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let opts = {
  'search': text, // String | Text fragment used for searching.
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.suppressionsUnsubscribesGet(opts, (error, data, response) => {
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
 **search** | **String**| Text fragment used for searching. | [optional] 
 **limit** | **Number**| Maximum number of returned items. | [optional] 
 **offset** | **Number**| How many items should be returned ahead. | [optional] 

### Return type

[**[Suppression]**](Suppression.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## suppressionsUnsubscribesImportPost

> suppressionsUnsubscribesImportPost(opts)

Add Unsubscribes Async

Add Unsubscribes. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.suppressionsUnsubscribesImportPost(opts, (error, data, response) => {
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
 **file** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## suppressionsUnsubscribesPost

> [Suppression] suppressionsUnsubscribesPost(requestBody)

Add Unsubscribes

Add Unsubscribes. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SuppressionsApi();
let requestBody = ["null"]; // [String] | Emails to add as unsubscribes. Limited to 1000 per request
apiInstance.suppressionsUnsubscribesPost(requestBody, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)| Emails to add as unsubscribes. Limited to 1000 per request | 

### Return type

[**[Suppression]**](Suppression.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

