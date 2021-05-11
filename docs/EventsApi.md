# ElasticEmail.EventsApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsByTransactionidGet**](EventsApi.md#eventsByTransactionidGet) | **GET** /events/{transactionid} | Load Email Events
[**eventsChannelsByNameExportPost**](EventsApi.md#eventsChannelsByNameExportPost) | **POST** /events/channels/{name}/export | Export Channel Events
[**eventsChannelsByNameGet**](EventsApi.md#eventsChannelsByNameGet) | **GET** /events/channels/{name} | Load Channel Events
[**eventsChannelsExportByIdStatusGet**](EventsApi.md#eventsChannelsExportByIdStatusGet) | **GET** /events/channels/export/{id}/status | Check Channel Export Status
[**eventsExportByIdStatusGet**](EventsApi.md#eventsExportByIdStatusGet) | **GET** /events/export/{id}/status | Check Export Status
[**eventsExportPost**](EventsApi.md#eventsExportPost) | **POST** /events/export | Export Events
[**eventsGet**](EventsApi.md#eventsGet) | **GET** /events | Load Events



## eventsByTransactionidGet

> [RecipientEvent] eventsByTransactionidGet(transactionid, opts)

Load Email Events

Returns a log of delivery events for the specific transaction ID. Required Access Level: ViewReports

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EventsApi();
let transactionid = TransactionID; // String | ID number of transaction
let opts = {
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Starting date for search in YYYY-MM-DDThh:mm:ss format.
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Ending date for search in YYYY-MM-DDThh:mm:ss format.
  'orderBy': new ElasticEmail.EventsOrderBy(), // EventsOrderBy | 
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.eventsByTransactionidGet(transactionid, opts, (error, data, response) => {
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
 **transactionid** | **String**| ID number of transaction | 
 **from** | **Date**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **Date**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **orderBy** | [**EventsOrderBy**](.md)|  | [optional] 
 **limit** | **Number**| Maximum number of returned items. | [optional] 
 **offset** | **Number**| How many items should be returned ahead. | [optional] 

### Return type

[**[RecipientEvent]**](RecipientEvent.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsChannelsByNameExportPost

> ExportLink eventsChannelsByNameExportPost(name, opts)

Export Channel Events

Export delivery events log information to the specified file format. Required Access Level: Export

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EventsApi();
let name = Channel01; // String | Name of selected channel.
let opts = {
  'eventTypes': [new ElasticEmail.EventType()], // [EventType] | Types of Events to return
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Starting date for search in YYYY-MM-DDThh:mm:ss format.
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Ending date for search in YYYY-MM-DDThh:mm:ss format.
  'fileFormat': new ElasticEmail.ExportFileFormats(), // ExportFileFormats | Format of the exported file
  'compressionFormat': new ElasticEmail.CompressionFormat(), // CompressionFormat | FileResponse compression format. None or Zip.
  'fileName': filename.txt // String | Name of your file including extension.
};
apiInstance.eventsChannelsByNameExportPost(name, opts, (error, data, response) => {
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
 **name** | **String**| Name of selected channel. | 
 **eventTypes** | [**[EventType]**](EventType.md)| Types of Events to return | [optional] 
 **from** | **Date**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **Date**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **fileFormat** | [**ExportFileFormats**](.md)| Format of the exported file | [optional] 
 **compressionFormat** | [**CompressionFormat**](.md)| FileResponse compression format. None or Zip. | [optional] 
 **fileName** | **String**| Name of your file including extension. | [optional] 

### Return type

[**ExportLink**](ExportLink.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsChannelsByNameGet

> [RecipientEvent] eventsChannelsByNameGet(name, opts)

Load Channel Events

Returns a log of delivery events filtered by specified parameters. Required Access Level: ViewReports

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EventsApi();
let name = Channel01; // String | Name of selected channel.
let opts = {
  'eventTypes': [new ElasticEmail.EventType()], // [EventType] | Types of Events to return
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Starting date for search in YYYY-MM-DDThh:mm:ss format.
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Ending date for search in YYYY-MM-DDThh:mm:ss format.
  'orderBy': new ElasticEmail.EventsOrderBy(), // EventsOrderBy | 
  'limit': 56, // Number | How many items to load. Maximum for this request is 1000 items
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.eventsChannelsByNameGet(name, opts, (error, data, response) => {
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
 **name** | **String**| Name of selected channel. | 
 **eventTypes** | [**[EventType]**](EventType.md)| Types of Events to return | [optional] 
 **from** | **Date**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **Date**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **orderBy** | [**EventsOrderBy**](.md)|  | [optional] 
 **limit** | **Number**| How many items to load. Maximum for this request is 1000 items | [optional] 
 **offset** | **Number**| How many items should be returned ahead. | [optional] 

### Return type

[**[RecipientEvent]**](RecipientEvent.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsChannelsExportByIdStatusGet

> ExportStatus eventsChannelsExportByIdStatusGet(id)

Check Channel Export Status

Check the current status of the channel export. Required Access Level: Export

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EventsApi();
let id = E33EBA7A-C20D-4D3D-8F2F-5EEF42F58E6F; // String | ID of the exported file
apiInstance.eventsChannelsExportByIdStatusGet(id, (error, data, response) => {
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
 **id** | **String**| ID of the exported file | 

### Return type

[**ExportStatus**](ExportStatus.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsExportByIdStatusGet

> ExportStatus eventsExportByIdStatusGet(id)

Check Export Status

Check the current status of the export. Required Access Level: Export

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EventsApi();
let id = E33EBA7A-C20D-4D3D-8F2F-5EEF42F58E6F; // String | ID of the exported file
apiInstance.eventsExportByIdStatusGet(id, (error, data, response) => {
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
 **id** | **String**| ID of the exported file | 

### Return type

[**ExportStatus**](ExportStatus.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsExportPost

> ExportLink eventsExportPost(opts)

Export Events

Export delivery events log information to the specified file format. Required Access Level: Export

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EventsApi();
let opts = {
  'eventTypes': [new ElasticEmail.EventType()], // [EventType] | Types of Events to return
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Starting date for search in YYYY-MM-DDThh:mm:ss format.
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Ending date for search in YYYY-MM-DDThh:mm:ss format.
  'fileFormat': new ElasticEmail.ExportFileFormats(), // ExportFileFormats | Format of the exported file
  'compressionFormat': new ElasticEmail.CompressionFormat(), // CompressionFormat | FileResponse compression format. None or Zip.
  'fileName': filename.txt // String | Name of your file including extension.
};
apiInstance.eventsExportPost(opts, (error, data, response) => {
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
 **eventTypes** | [**[EventType]**](EventType.md)| Types of Events to return | [optional] 
 **from** | **Date**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **Date**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **fileFormat** | [**ExportFileFormats**](.md)| Format of the exported file | [optional] 
 **compressionFormat** | [**CompressionFormat**](.md)| FileResponse compression format. None or Zip. | [optional] 
 **fileName** | **String**| Name of your file including extension. | [optional] 

### Return type

[**ExportLink**](ExportLink.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsGet

> [RecipientEvent] eventsGet(opts)

Load Events

Returns a log of delivery events filtered by specified parameters. Required Access Level: ViewReports

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.EventsApi();
let opts = {
  'eventTypes': [new ElasticEmail.EventType()], // [EventType] | Types of Events to return
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Starting date for search in YYYY-MM-DDThh:mm:ss format.
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Ending date for search in YYYY-MM-DDThh:mm:ss format.
  'orderBy': new ElasticEmail.EventsOrderBy(), // EventsOrderBy | 
  'limit': 56, // Number | How many items to load. Maximum for this request is 1000 items
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.eventsGet(opts, (error, data, response) => {
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
 **eventTypes** | [**[EventType]**](EventType.md)| Types of Events to return | [optional] 
 **from** | **Date**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **Date**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **orderBy** | [**EventsOrderBy**](.md)|  | [optional] 
 **limit** | **Number**| How many items to load. Maximum for this request is 1000 items | [optional] 
 **offset** | **Number**| How many items should be returned ahead. | [optional] 

### Return type

[**[RecipientEvent]**](RecipientEvent.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

