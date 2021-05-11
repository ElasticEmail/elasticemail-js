# ElasticEmail.SubAccountsApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subaccountsByEmailCreditsPatch**](SubAccountsApi.md#subaccountsByEmailCreditsPatch) | **PATCH** /subaccounts/{email}/credits | Add, Subtract Email Credits
[**subaccountsByEmailDelete**](SubAccountsApi.md#subaccountsByEmailDelete) | **DELETE** /subaccounts/{email} | Delete SubAccount
[**subaccountsByEmailGet**](SubAccountsApi.md#subaccountsByEmailGet) | **GET** /subaccounts/{email} | Load SubAccount
[**subaccountsByEmailSettingsEmailPut**](SubAccountsApi.md#subaccountsByEmailSettingsEmailPut) | **PUT** /subaccounts/{email}/settings/email | Update SubAccount Email Settings
[**subaccountsGet**](SubAccountsApi.md#subaccountsGet) | **GET** /subaccounts | Load SubAccounts
[**subaccountsPost**](SubAccountsApi.md#subaccountsPost) | **POST** /subaccounts | Add SubAccount



## subaccountsByEmailCreditsPatch

> subaccountsByEmailCreditsPatch(email, subaccountEmailCreditsPayload)

Add, Subtract Email Credits

Update email credits of a subaccount by the given amount. Required Access Level: ModifySubAccounts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SubAccountsApi();
let email = mail@example.com; // String | Email address of Sub-Account
let subaccountEmailCreditsPayload = new ElasticEmail.SubaccountEmailCreditsPayload(); // SubaccountEmailCreditsPayload | Amount of email credits to add or subtract from the current SubAccount email credits pool (positive or negative value)
apiInstance.subaccountsByEmailCreditsPatch(email, subaccountEmailCreditsPayload, (error, data, response) => {
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
 **email** | **String**| Email address of Sub-Account | 
 **subaccountEmailCreditsPayload** | [**SubaccountEmailCreditsPayload**](SubaccountEmailCreditsPayload.md)| Amount of email credits to add or subtract from the current SubAccount email credits pool (positive or negative value) | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## subaccountsByEmailDelete

> subaccountsByEmailDelete(email)

Delete SubAccount

Deletes specified SubAccount. An email will be sent to confirm this change. Required Access Level: ModifySubAccounts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SubAccountsApi();
let email = mail@example.com; // String | Email address of Sub-Account
apiInstance.subaccountsByEmailDelete(email, (error, data, response) => {
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
 **email** | **String**| Email address of Sub-Account | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## subaccountsByEmailGet

> SubAccountInfo subaccountsByEmailGet(email)

Load SubAccount

Returns details for the specified SubAccount. Required Access Level: ViewSubAccounts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SubAccountsApi();
let email = mail@example.com; // String | Email address of Sub-Account
apiInstance.subaccountsByEmailGet(email, (error, data, response) => {
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
 **email** | **String**| Email address of Sub-Account | 

### Return type

[**SubAccountInfo**](SubAccountInfo.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subaccountsByEmailSettingsEmailPut

> SubaccountEmailSettings subaccountsByEmailSettingsEmailPut(email, subaccountEmailSettings)

Update SubAccount Email Settings

Update SubAccount email settings. Required Access Level: ModifySubAccounts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SubAccountsApi();
let email = "email_example"; // String | 
let subaccountEmailSettings = new ElasticEmail.SubaccountEmailSettings(); // SubaccountEmailSettings | Updated Email Settings
apiInstance.subaccountsByEmailSettingsEmailPut(email, subaccountEmailSettings, (error, data, response) => {
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
 **email** | **String**|  | 
 **subaccountEmailSettings** | [**SubaccountEmailSettings**](SubaccountEmailSettings.md)| Updated Email Settings | 

### Return type

[**SubaccountEmailSettings**](SubaccountEmailSettings.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subaccountsGet

> [SubAccountInfo] subaccountsGet(opts)

Load SubAccounts

Returns a list of all your SubAccounts. Required Access Level: ViewSubAccounts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SubAccountsApi();
let opts = {
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.subaccountsGet(opts, (error, data, response) => {
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

[**[SubAccountInfo]**](SubAccountInfo.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subaccountsPost

> SubAccountInfo subaccountsPost(subaccountPayload)

Add SubAccount

Add a new SubAccount to your Account. To receive an access token for this SubAccount, make a POST security/apikeys request using the &#39;subaccount&#39; parameter. Required Access Level: ModifySubAccounts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SubAccountsApi();
let subaccountPayload = new ElasticEmail.SubaccountPayload(); // SubaccountPayload | 
apiInstance.subaccountsPost(subaccountPayload, (error, data, response) => {
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
 **subaccountPayload** | [**SubaccountPayload**](SubaccountPayload.md)|  | 

### Return type

[**SubAccountInfo**](SubAccountInfo.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

