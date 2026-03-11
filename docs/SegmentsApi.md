# ElasticEmail.SegmentsApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**segmentsByNameDelete**](SegmentsApi.md#segmentsByNameDelete) | **DELETE** /segments/{name} | Delete Segment
[**segmentsByNameGet**](SegmentsApi.md#segmentsByNameGet) | **GET** /segments/{name} | Load Segment
[**segmentsByNamePut**](SegmentsApi.md#segmentsByNamePut) | **PUT** /segments/{name} | Update Segment
[**segmentsGet**](SegmentsApi.md#segmentsGet) | **GET** /segments | Load Segments
[**segmentsPost**](SegmentsApi.md#segmentsPost) | **POST** /segments | Add Segment



## segmentsByNameDelete

> segmentsByNameDelete(name)

Delete Segment

Delete an existing segment. Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SegmentsApi();
let name = "My Segment 1"; // String | Name of your segment.
apiInstance.segmentsByNameDelete(name, (error, data, response) => {
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
 **name** | **String**| Name of your segment. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## segmentsByNameGet

> Segment segmentsByNameGet(name)

Load Segment

Returns details for the specified segment. Required Access Level: ViewContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SegmentsApi();
let name = "name_example"; // String | Name of the segment you want to load. Will load all contacts if the 'All Contacts' name has been provided
apiInstance.segmentsByNameGet(name, (error, data, response) => {
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
 **name** | **String**| Name of the segment you want to load. Will load all contacts if the &#39;All Contacts&#39; name has been provided | 

### Return type

[**Segment**](Segment.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## segmentsByNamePut

> Segment segmentsByNamePut(name, segmentPayload)

Update Segment

Rename or change RULE for your segment. Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SegmentsApi();
let name = "My Segment 1"; // String | Name of your segment.
let segmentPayload = new ElasticEmail.SegmentPayload(); // SegmentPayload | 
apiInstance.segmentsByNamePut(name, segmentPayload, (error, data, response) => {
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
 **name** | **String**| Name of your segment. | 
 **segmentPayload** | [**SegmentPayload**](SegmentPayload.md)|  | 

### Return type

[**Segment**](Segment.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## segmentsGet

> [Segment] segmentsGet(opts)

Load Segments

Returns a list of all your available Segments. Required Access Level: ViewContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SegmentsApi();
let opts = {
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.segmentsGet(opts, (error, data, response) => {
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

[**[Segment]**](Segment.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## segmentsPost

> Segment segmentsPost(segmentPayload)

Add Segment

Add a new segment, based on specified RULE. Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.SegmentsApi();
let segmentPayload = new ElasticEmail.SegmentPayload(); // SegmentPayload | 
apiInstance.segmentsPost(segmentPayload, (error, data, response) => {
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
 **segmentPayload** | [**SegmentPayload**](SegmentPayload.md)|  | 

### Return type

[**Segment**](Segment.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

