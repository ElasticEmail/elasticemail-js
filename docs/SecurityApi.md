# ElasticEmail.SecurityApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**securityApikeysByNameDelete**](SecurityApi.md#securityApikeysByNameDelete) | **DELETE** /security/apikeys/{name} | Delete ApiKey
[**securityApikeysByNameGet**](SecurityApi.md#securityApikeysByNameGet) | **GET** /security/apikeys/{name} | Load ApiKey
[**securityApikeysByNamePut**](SecurityApi.md#securityApikeysByNamePut) | **PUT** /security/apikeys/{name} | Update ApiKey
[**securityApikeysGet**](SecurityApi.md#securityApikeysGet) | **GET** /security/apikeys | List ApiKeys
[**securityApikeysPost**](SecurityApi.md#securityApikeysPost) | **POST** /security/apikeys | Add ApiKey
[**securitySmtpByNameDelete**](SecurityApi.md#securitySmtpByNameDelete) | **DELETE** /security/smtp/{name} | Delete SMTP Credential
[**securitySmtpByNameGet**](SecurityApi.md#securitySmtpByNameGet) | **GET** /security/smtp/{name} | Load SMTP Credential
[**securitySmtpByNamePut**](SecurityApi.md#securitySmtpByNamePut) | **PUT** /security/smtp/{name} | Update SMTP Credential
[**securitySmtpGet**](SecurityApi.md#securitySmtpGet) | **GET** /security/smtp | List SMTP Credentials
[**securitySmtpPost**](SecurityApi.md#securitySmtpPost) | **POST** /security/smtp | Add SMTP Credential



## securityApikeysByNameDelete

> securityApikeysByNameDelete(name, opts)

Delete ApiKey

Delete your existing ApiKey. Required Access Level: ModifyAccessTokens

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SecurityApi();
let name = "name_example"; // String | Name of the ApiKey
let opts = {
  'subaccount': "subaccount_example" // String | Email of the subaccount of which ApiKey should be deleted
};
apiInstance.securityApikeysByNameDelete(name, opts, (error, data, response) => {
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
 **name** | **String**| Name of the ApiKey | 
 **subaccount** | **String**| Email of the subaccount of which ApiKey should be deleted | [optional] 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## securityApikeysByNameGet

> ApiKey securityApikeysByNameGet(name, opts)

Load ApiKey

Load your existing ApiKey info. Required Access Level: Security

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SecurityApi();
let name = "name_example"; // String | Name of the ApiKey
let opts = {
  'subaccount': "subaccount_example" // String | Email of the subaccount of which ApiKey should be loaded
};
apiInstance.securityApikeysByNameGet(name, opts, (error, data, response) => {
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
 **name** | **String**| Name of the ApiKey | 
 **subaccount** | **String**| Email of the subaccount of which ApiKey should be loaded | [optional] 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## securityApikeysByNamePut

> ApiKey securityApikeysByNamePut(name, apiKeyPayload)

Update ApiKey

Update your existing ApiKey. Required Access Level: ModifyAccessTokens

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SecurityApi();
let name = "name_example"; // String | Name of the ApiKey
let apiKeyPayload = new ElasticEmail.ApiKeyPayload(); // ApiKeyPayload | 
apiInstance.securityApikeysByNamePut(name, apiKeyPayload, (error, data, response) => {
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
 **name** | **String**| Name of the ApiKey | 
 **apiKeyPayload** | [**ApiKeyPayload**](ApiKeyPayload.md)|  | 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## securityApikeysGet

> [ApiKey] securityApikeysGet(opts)

List ApiKeys

List all your existing ApiKeys. Required Access Level: Security

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SecurityApi();
let opts = {
  'subaccount': "subaccount_example" // String | Email of the subaccount of which ApiKeys should be loaded
};
apiInstance.securityApikeysGet(opts, (error, data, response) => {
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
 **subaccount** | **String**| Email of the subaccount of which ApiKeys should be loaded | [optional] 

### Return type

[**[ApiKey]**](ApiKey.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## securityApikeysPost

> NewApiKey securityApikeysPost(apiKeyPayload)

Add ApiKey

Add a new ApiKey. Required Access Level: ModifyAccessTokens

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SecurityApi();
let apiKeyPayload = new ElasticEmail.ApiKeyPayload(); // ApiKeyPayload | 
apiInstance.securityApikeysPost(apiKeyPayload, (error, data, response) => {
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
 **apiKeyPayload** | [**ApiKeyPayload**](ApiKeyPayload.md)|  | 

### Return type

[**NewApiKey**](NewApiKey.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## securitySmtpByNameDelete

> securitySmtpByNameDelete(name, opts)

Delete SMTP Credential

Delete your existing SMTP Credentials. Required Access Level: ModifyAccessTokens

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SecurityApi();
let name = "name_example"; // String | Name of the SMTP Credential
let opts = {
  'subaccount': "subaccount_example" // String | Email of the subaccount of which credential should be deleted
};
apiInstance.securitySmtpByNameDelete(name, opts, (error, data, response) => {
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
 **name** | **String**| Name of the SMTP Credential | 
 **subaccount** | **String**| Email of the subaccount of which credential should be deleted | [optional] 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## securitySmtpByNameGet

> SmtpCredentials securitySmtpByNameGet(name, opts)

Load SMTP Credential

Load your existing SMTP Credential info. Required Access Level: Security

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SecurityApi();
let name = "name_example"; // String | Name of the SMTP Credential
let opts = {
  'subaccount': "subaccount_example" // String | Email of the subaccount of which credential should be loaded
};
apiInstance.securitySmtpByNameGet(name, opts, (error, data, response) => {
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
 **name** | **String**| Name of the SMTP Credential | 
 **subaccount** | **String**| Email of the subaccount of which credential should be loaded | [optional] 

### Return type

[**SmtpCredentials**](SmtpCredentials.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## securitySmtpByNamePut

> SmtpCredentials securitySmtpByNamePut(name, smtpCredentialsPayload)

Update SMTP Credential

Update your existing SMTP Credentials. Required Access Level: ModifyAccessTokens

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SecurityApi();
let name = "name_example"; // String | Name of the SMTP Credential
let smtpCredentialsPayload = new ElasticEmail.SmtpCredentialsPayload(); // SmtpCredentialsPayload | 
apiInstance.securitySmtpByNamePut(name, smtpCredentialsPayload, (error, data, response) => {
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
 **name** | **String**| Name of the SMTP Credential | 
 **smtpCredentialsPayload** | [**SmtpCredentialsPayload**](SmtpCredentialsPayload.md)|  | 

### Return type

[**SmtpCredentials**](SmtpCredentials.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## securitySmtpGet

> [SmtpCredentials] securitySmtpGet(opts)

List SMTP Credentials

List all your existing SMTP Credentials. Required Access Level: Security

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SecurityApi();
let opts = {
  'subaccount': "subaccount_example" // String | Email of the subaccount of which credentials should be listed
};
apiInstance.securitySmtpGet(opts, (error, data, response) => {
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
 **subaccount** | **String**| Email of the subaccount of which credentials should be listed | [optional] 

### Return type

[**[SmtpCredentials]**](SmtpCredentials.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## securitySmtpPost

> NewSmtpCredentials securitySmtpPost(smtpCredentialsPayload)

Add SMTP Credential

Add new SMTP Credential. Required Access Level: ModifyAccessTokens

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SecurityApi();
let smtpCredentialsPayload = new ElasticEmail.SmtpCredentialsPayload(); // SmtpCredentialsPayload | 
apiInstance.securitySmtpPost(smtpCredentialsPayload, (error, data, response) => {
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
 **smtpCredentialsPayload** | [**SmtpCredentialsPayload**](SmtpCredentialsPayload.md)|  | 

### Return type

[**NewSmtpCredentials**](NewSmtpCredentials.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

