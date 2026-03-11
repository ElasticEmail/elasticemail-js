# ElasticEmail.TemplatesApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templatesByNameDelete**](TemplatesApi.md#templatesByNameDelete) | **DELETE** /templates/{name} | Delete Template
[**templatesByNameGet**](TemplatesApi.md#templatesByNameGet) | **GET** /templates/{name} | Load Template
[**templatesByNamePut**](TemplatesApi.md#templatesByNamePut) | **PUT** /templates/{name} | Update Template
[**templatesGet**](TemplatesApi.md#templatesGet) | **GET** /templates | Load Templates
[**templatesPost**](TemplatesApi.md#templatesPost) | **POST** /templates | Add Template



## templatesByNameDelete

> templatesByNameDelete(name)

Delete Template

Delete template with the specified name. Required Access Level: ModifyTemplates

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.TemplatesApi();
let name = "Template01"; // String | Name of template.
apiInstance.templatesByNameDelete(name, (error, data, response) => {
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
 **name** | **String**| Name of template. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## templatesByNameGet

> Template templatesByNameGet(name)

Load Template

Load detailed information of the specified template. Required Access Level: ViewTemplates

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.TemplatesApi();
let name = "Template01"; // String | Name of template.
apiInstance.templatesByNameGet(name, (error, data, response) => {
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
 **name** | **String**| Name of template. | 

### Return type

[**Template**](Template.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templatesByNamePut

> Template templatesByNamePut(name, templatePayload)

Update Template

Update existing template, overwriting existing data. Required Access Level: ModifyTemplates

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.TemplatesApi();
let name = "Template01"; // String | Name of template.
let templatePayload = new ElasticEmail.TemplatePayload(); // TemplatePayload | 
apiInstance.templatesByNamePut(name, templatePayload, (error, data, response) => {
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
 **name** | **String**| Name of template. | 
 **templatePayload** | [**TemplatePayload**](TemplatePayload.md)|  | 

### Return type

[**Template**](Template.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## templatesGet

> [Template] templatesGet(scopeType, opts)

Load Templates

Returns a list of templates for the specified type. Required Access Level: ViewTemplates

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.TemplatesApi();
let scopeType = [new ElasticEmail.TemplateScope()]; // [TemplateScope] | Return templates with specified scope only
let opts = {
  'templateTypes': [new ElasticEmail.TemplateType()], // [TemplateType] | Return templates with specified type only
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.templatesGet(scopeType, opts, (error, data, response) => {
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
 **scopeType** | [**[TemplateScope]**](TemplateScope.md)| Return templates with specified scope only | 
 **templateTypes** | [**[TemplateType]**](TemplateType.md)| Return templates with specified type only | [optional] 
 **limit** | **Number**| Maximum number of returned items. | [optional] 
 **offset** | **Number**| How many items should be returned ahead. | [optional] 

### Return type

[**[Template]**](Template.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templatesPost

> Template templatesPost(templatePayload)

Add Template

Add a new Template. Required Access Level: ModifyTemplates

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.TemplatesApi();
let templatePayload = new ElasticEmail.TemplatePayload(); // TemplatePayload | 
apiInstance.templatesPost(templatePayload, (error, data, response) => {
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
 **templatePayload** | [**TemplatePayload**](TemplatePayload.md)|  | 

### Return type

[**Template**](Template.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

