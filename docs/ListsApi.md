# ElasticEmail.ListsApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listsByNameContactsPost**](ListsApi.md#listsByNameContactsPost) | **POST** /lists/{name}/contacts | Add Contacts to List
[**listsByNameContactsRemovePost**](ListsApi.md#listsByNameContactsRemovePost) | **POST** /lists/{name}/contacts/remove | Remove Contacts from List
[**listsByNameDelete**](ListsApi.md#listsByNameDelete) | **DELETE** /lists/{name} | Delete List
[**listsByNameGet**](ListsApi.md#listsByNameGet) | **GET** /lists/{name} | Load List
[**listsByNamePut**](ListsApi.md#listsByNamePut) | **PUT** /lists/{name} | Update List
[**listsGet**](ListsApi.md#listsGet) | **GET** /lists | Load Lists
[**listsPost**](ListsApi.md#listsPost) | **POST** /lists | Add List



## listsByNameContactsPost

> ContactsList listsByNameContactsPost(name, emailsPayload)

Add Contacts to List

Add existing Contacts to specified list. Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ListsApi();
let name = My List 1; // String | Name of your list.
let emailsPayload = new ElasticEmail.EmailsPayload(); // EmailsPayload | Provide either rule or a list of emails, not both.
apiInstance.listsByNameContactsPost(name, emailsPayload, (error, data, response) => {
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
 **name** | **String**| Name of your list. | 
 **emailsPayload** | [**EmailsPayload**](EmailsPayload.md)| Provide either rule or a list of emails, not both. | 

### Return type

[**ContactsList**](ContactsList.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listsByNameContactsRemovePost

> listsByNameContactsRemovePost(name, emailsPayload)

Remove Contacts from List

Remove specified Contacts from your list. Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ListsApi();
let name = My List 1; // String | Name of your list.
let emailsPayload = new ElasticEmail.EmailsPayload(); // EmailsPayload | Provide either rule or a list of emails, not both.
apiInstance.listsByNameContactsRemovePost(name, emailsPayload, (error, data, response) => {
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
 **name** | **String**| Name of your list. | 
 **emailsPayload** | [**EmailsPayload**](EmailsPayload.md)| Provide either rule or a list of emails, not both. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## listsByNameDelete

> listsByNameDelete(name)

Delete List

Deletes List and removes all the Contacts from it (does not delete Contacts). Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ListsApi();
let name = My List 1; // String | Name of your list.
apiInstance.listsByNameDelete(name, (error, data, response) => {
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
 **name** | **String**| Name of your list. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listsByNameGet

> ContactsList listsByNameGet(name)

Load List

Returns detailed information about specified list. Required Access Level: ViewContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ListsApi();
let name = My List 1; // String | Name of your list.
apiInstance.listsByNameGet(name, (error, data, response) => {
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
 **name** | **String**| Name of your list. | 

### Return type

[**ContactsList**](ContactsList.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listsByNamePut

> ContactsList listsByNamePut(name, listUpdatePayload)

Update List

Update existing list. Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ListsApi();
let name = My List 1; // String | Name of your list.
let listUpdatePayload = new ElasticEmail.ListUpdatePayload(); // ListUpdatePayload | 
apiInstance.listsByNamePut(name, listUpdatePayload, (error, data, response) => {
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
 **name** | **String**| Name of your list. | 
 **listUpdatePayload** | [**ListUpdatePayload**](ListUpdatePayload.md)|  | 

### Return type

[**ContactsList**](ContactsList.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listsGet

> [ContactsList] listsGet(opts)

Load Lists

Returns all your existing lists. Required Access Level: ViewContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ListsApi();
let opts = {
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.listsGet(opts, (error, data, response) => {
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

[**[ContactsList]**](ContactsList.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listsPost

> ContactsList listsPost(listPayload)

Add List

Add a new list. Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ListsApi();
let listPayload = new ElasticEmail.ListPayload(); // ListPayload | 
apiInstance.listsPost(listPayload, (error, data, response) => {
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
 **listPayload** | [**ListPayload**](ListPayload.md)|  | 

### Return type

[**ContactsList**](ContactsList.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

