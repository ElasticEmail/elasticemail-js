# ElasticEmail.DomainsApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsByDomainDelete**](DomainsApi.md#domainsByDomainDelete) | **DELETE** /domains/{domain} | Delete Domain
[**domainsByDomainGet**](DomainsApi.md#domainsByDomainGet) | **GET** /domains/{domain} | Load Domain
[**domainsByDomainPut**](DomainsApi.md#domainsByDomainPut) | **PUT** /domains/{domain} | Update Domain
[**domainsByDomainRestrictedGet**](DomainsApi.md#domainsByDomainRestrictedGet) | **GET** /domains/{domain}/restricted | Check for domain restriction
[**domainsByDomainVerificationPut**](DomainsApi.md#domainsByDomainVerificationPut) | **PUT** /domains/{domain}/verification | Verify Domain
[**domainsByEmailDefaultPatch**](DomainsApi.md#domainsByEmailDefaultPatch) | **PATCH** /domains/{email}/default | Set Default
[**domainsGet**](DomainsApi.md#domainsGet) | **GET** /domains | Load Domains
[**domainsPost**](DomainsApi.md#domainsPost) | **POST** /domains | Add Domain



## domainsByDomainDelete

> domainsByDomainDelete(domain)

Delete Domain

Deletes configured domain from Account. Required Access Level: ModifySettings

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.DomainsApi();
let domain = "domain_example"; // String | Name of the given domain
apiInstance.domainsByDomainDelete(domain, (error, data, response) => {
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
 **domain** | **String**| Name of the given domain | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## domainsByDomainGet

> DomainData domainsByDomainGet(domain)

Load Domain

Retrieve a domain configured for this Account. Required Access Level: ViewSettings

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.DomainsApi();
let domain = "domain_example"; // String | Name of the given domain
apiInstance.domainsByDomainGet(domain, (error, data, response) => {
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
 **domain** | **String**| Name of the given domain | 

### Return type

[**DomainData**](DomainData.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainsByDomainPut

> DomainDetail domainsByDomainPut(domain, domainUpdatePayload)

Update Domain

Updates the specified domain. Required Access Level: ModifySettings

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.DomainsApi();
let domain = "domain_example"; // String | Name of the given domain
let domainUpdatePayload = new ElasticEmail.DomainUpdatePayload(); // DomainUpdatePayload | Updated Domain resource
apiInstance.domainsByDomainPut(domain, domainUpdatePayload, (error, data, response) => {
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
 **domain** | **String**| Name of the given domain | 
 **domainUpdatePayload** | [**DomainUpdatePayload**](DomainUpdatePayload.md)| Updated Domain resource | 

### Return type

[**DomainDetail**](DomainDetail.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## domainsByDomainRestrictedGet

> Boolean domainsByDomainRestrictedGet(domain)

Check for domain restriction

Checking if domain is from free provider, or restricted. Required Access Level: ViewSettings

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.DomainsApi();
let domain = "domain_example"; // String | Name of the given domain
apiInstance.domainsByDomainRestrictedGet(domain, (error, data, response) => {
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
 **domain** | **String**| Name of the given domain | 

### Return type

**Boolean**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainsByDomainVerificationPut

> DomainData domainsByDomainVerificationPut(domain, body)

Verify Domain

Verifies that required DNS records exist for specified domain. Required Access Level: ModifySettings

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.DomainsApi();
let domain = "domain_example"; // String | Name of the given domain
let body = "body_example"; // String | Tracking type used in the Tracking verification
apiInstance.domainsByDomainVerificationPut(domain, body, (error, data, response) => {
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
 **domain** | **String**| Name of the given domain | 
 **body** | **String**| Tracking type used in the Tracking verification | 

### Return type

[**DomainData**](DomainData.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## domainsByEmailDefaultPatch

> DomainDetail domainsByEmailDefaultPatch(email)

Set Default

Sets a verified email address as default sender. Required Access Level: ModifySettings

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.DomainsApi();
let email = "email_example"; // String | Default email sender, example: mail@yourdomain.com
apiInstance.domainsByEmailDefaultPatch(email, (error, data, response) => {
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
 **email** | **String**| Default email sender, example: mail@yourdomain.com | 

### Return type

[**DomainDetail**](DomainDetail.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainsGet

> [DomainDetail] domainsGet()

Load Domains

Returns a list of all domains configured for this Account. Required Access Level: ViewSettings

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.DomainsApi();
apiInstance.domainsGet((error, data, response) => {
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

[**[DomainDetail]**](DomainDetail.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainsPost

> DomainDetail domainsPost(domainPayload)

Add Domain

Add new domain to Account. Required Access Level: ModifySettings

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.DomainsApi();
let domainPayload = new ElasticEmail.DomainPayload(); // DomainPayload | Domain to add
apiInstance.domainsPost(domainPayload, (error, data, response) => {
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
 **domainPayload** | [**DomainPayload**](DomainPayload.md)| Domain to add | 

### Return type

[**DomainDetail**](DomainDetail.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

