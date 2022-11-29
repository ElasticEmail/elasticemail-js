# ElasticEmail.VerificationsApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**verificationsByEmailDelete**](VerificationsApi.md#verificationsByEmailDelete) | **DELETE** /verifications/{email} | Delete Email Verification Result
[**verificationsByEmailGet**](VerificationsApi.md#verificationsByEmailGet) | **GET** /verifications/{email} | Get Email Verification Result
[**verificationsByEmailPost**](VerificationsApi.md#verificationsByEmailPost) | **POST** /verifications/{email} | Verify Email
[**verificationsFilesByIdDelete**](VerificationsApi.md#verificationsFilesByIdDelete) | **DELETE** /verifications/files/{id} | Delete File Verification Result
[**verificationsFilesByIdResultDownloadGet**](VerificationsApi.md#verificationsFilesByIdResultDownloadGet) | **GET** /verifications/files/{id}/result/download | Download File Verification Result
[**verificationsFilesByIdResultGet**](VerificationsApi.md#verificationsFilesByIdResultGet) | **GET** /verifications/files/{id}/result | Get Detailed File Verification Result
[**verificationsFilesByIdVerificationPost**](VerificationsApi.md#verificationsFilesByIdVerificationPost) | **POST** /verifications/files/{id}/verification | Start verification
[**verificationsFilesPost**](VerificationsApi.md#verificationsFilesPost) | **POST** /verifications/files | Upload File with Emails
[**verificationsFilesResultGet**](VerificationsApi.md#verificationsFilesResultGet) | **GET** /verifications/files/result | Get Files Verification Results
[**verificationsGet**](VerificationsApi.md#verificationsGet) | **GET** /verifications | Get Emails Verification Results



## verificationsByEmailDelete

> verificationsByEmailDelete(email)

Delete Email Verification Result

Delete a result with given email if exists. Required Access Level: VerifyEmails

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.VerificationsApi();
let email = "email_example"; // String | Email address to verification
apiInstance.verificationsByEmailDelete(email, (error, data, response) => {
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
 **email** | **String**| Email address to verification | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## verificationsByEmailGet

> EmailValidationResult verificationsByEmailGet(email)

Get Email Verification Result

Returns a result of verified email. Required Access Level: VerifyEmails, ViewEmailVerifications

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.VerificationsApi();
let email = "email_example"; // String | Email address to view verification result of
apiInstance.verificationsByEmailGet(email, (error, data, response) => {
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
 **email** | **String**| Email address to view verification result of | 

### Return type

[**EmailValidationResult**](EmailValidationResult.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verificationsByEmailPost

> EmailValidationResult verificationsByEmailPost(email)

Verify Email

Verify single email address and returns result of verification. Required Access Level: VerifyEmails

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.VerificationsApi();
let email = "email_example"; // String | Email address to verify
apiInstance.verificationsByEmailPost(email, (error, data, response) => {
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
 **email** | **String**| Email address to verify | 

### Return type

[**EmailValidationResult**](EmailValidationResult.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verificationsFilesByIdDelete

> verificationsFilesByIdDelete(id)

Delete File Verification Result

Delete Verification Results if they exist. Required Access Level: VerifyEmails

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.VerificationsApi();
let id = E33EBA7A-C20D-4D3D-8F2F-5EEF42F58E6F; // String | ID of the exported file
apiInstance.verificationsFilesByIdDelete(id, (error, data, response) => {
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
 **id** | **String**| ID of the exported file | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## verificationsFilesByIdResultDownloadGet

> File verificationsFilesByIdResultDownloadGet(id)

Download File Verification Result

Download verification results as a ZIP file. Required Access Level: VerifyEmails

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.VerificationsApi();
let id = "id_example"; // String | Verification ID to download
apiInstance.verificationsFilesByIdResultDownloadGet(id, (error, data, response) => {
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
 **id** | **String**| Verification ID to download | 

### Return type

**File**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/*


## verificationsFilesByIdResultGet

> VerificationFileResultDetails verificationsFilesByIdResultGet(id, opts)

Get Detailed File Verification Result

Returns status and results (if verified) of file with given ID. Required Access Level: VerifyEmails, ViewEmailVerifications

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.VerificationsApi();
let id = "id_example"; // String | ID of the Verification to display status of
let opts = {
  'limit': 56, // Number | Maximum number of returned email verification results
  'offset': 56 // Number | How many result items should be returned ahead
};
apiInstance.verificationsFilesByIdResultGet(id, opts, (error, data, response) => {
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
 **id** | **String**| ID of the Verification to display status of | 
 **limit** | **Number**| Maximum number of returned email verification results | [optional] 
 **offset** | **Number**| How many result items should be returned ahead | [optional] 

### Return type

[**VerificationFileResultDetails**](VerificationFileResultDetails.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verificationsFilesByIdVerificationPost

> verificationsFilesByIdVerificationPost(id)

Start verification

Start a verification of the previously uploaded file with emails. Required Access Level: VerifyEmails

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.VerificationsApi();
let id = "id_example"; // String | File ID to start verification
apiInstance.verificationsFilesByIdVerificationPost(id, (error, data, response) => {
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
 **id** | **String**| File ID to start verification | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## verificationsFilesPost

> VerificationFileResult verificationsFilesPost(opts)

Upload File with Emails

Uploads a CSV file with list of emails that can then be triggered for verification. An &#39;email&#39; column is required. Required Access Level: VerifyEmails

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.VerificationsApi();
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.verificationsFilesPost(opts, (error, data, response) => {
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
 **file** | **File**|  | [optional] 

### Return type

[**VerificationFileResult**](VerificationFileResult.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## verificationsFilesResultGet

> [VerificationFileResult] verificationsFilesResultGet()

Get Files Verification Results

Returns a list of uploaded files, their statuses and results. Required Access Level: VerifyEmails, ViewEmailVerifications

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.VerificationsApi();
apiInstance.verificationsFilesResultGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[VerificationFileResult]**](VerificationFileResult.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verificationsGet

> [EmailValidationResult] verificationsGet(opts)

Get Emails Verification Results

Returns a results of all verified single emails. Required Access Level: VerifyEmails, ViewEmailVerifications

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.VerificationsApi();
let opts = {
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.verificationsGet(opts, (error, data, response) => {
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

[**[EmailValidationResult]**](EmailValidationResult.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

