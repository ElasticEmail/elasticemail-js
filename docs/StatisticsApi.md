# ElasticEmail.StatisticsApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statisticsCampaignsByNameGet**](StatisticsApi.md#statisticsCampaignsByNameGet) | **GET** /statistics/campaigns/{name} | Load Campaign Stats
[**statisticsCampaignsGet**](StatisticsApi.md#statisticsCampaignsGet) | **GET** /statistics/campaigns | Load Campaigns Stats
[**statisticsChannelsByNameGet**](StatisticsApi.md#statisticsChannelsByNameGet) | **GET** /statistics/channels/{name} | Load Channel Stats
[**statisticsChannelsGet**](StatisticsApi.md#statisticsChannelsGet) | **GET** /statistics/channels | Load Channels Stats
[**statisticsGet**](StatisticsApi.md#statisticsGet) | **GET** /statistics | Load Statistics



## statisticsCampaignsByNameGet

> ChannelLogStatusSummary statisticsCampaignsByNameGet(name)

Load Campaign Stats

Retrieve stats of an existing campaign. Required Access Level: ViewChannels

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.StatisticsApi();
let name = "name_example"; // String | The name of the campaign to get.
apiInstance.statisticsCampaignsByNameGet(name, (error, data, response) => {
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
 **name** | **String**| The name of the campaign to get. | 

### Return type

[**ChannelLogStatusSummary**](ChannelLogStatusSummary.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsCampaignsGet

> [ChannelLogStatusSummary] statisticsCampaignsGet(opts)

Load Campaigns Stats

Returns a list of your Campaigns&#39; stats. Required Access Level: ViewChannels

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.StatisticsApi();
let opts = {
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.statisticsCampaignsGet(opts, (error, data, response) => {
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

[**[ChannelLogStatusSummary]**](ChannelLogStatusSummary.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsChannelsByNameGet

> ChannelLogStatusSummary statisticsChannelsByNameGet(name)

Load Channel Stats

Retrieve an existing channel stats. Required Access Level: ViewChannels

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.StatisticsApi();
let name = "name_example"; // String | The name of the channel to get.
apiInstance.statisticsChannelsByNameGet(name, (error, data, response) => {
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
 **name** | **String**| The name of the channel to get. | 

### Return type

[**ChannelLogStatusSummary**](ChannelLogStatusSummary.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsChannelsGet

> [ChannelLogStatusSummary] statisticsChannelsGet(opts)

Load Channels Stats

Returns a list of your Channels&#39; stats. Required Access Level: ViewChannels

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.StatisticsApi();
let opts = {
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.statisticsChannelsGet(opts, (error, data, response) => {
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

[**[ChannelLogStatusSummary]**](ChannelLogStatusSummary.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsGet

> LogStatusSummary statisticsGet(from, opts)

Load Statistics

Returns basic statistics. Required Access Level: ViewReports

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.StatisticsApi();
let from = new Date("2013-10-20T19:20:30+01:00"); // Date | Starting date for search in YYYY-MM-DDThh:mm:ss format.
let opts = {
  'to': new Date("2013-10-20T19:20:30+01:00") // Date | Ending date for search in YYYY-MM-DDThh:mm:ss format.
};
apiInstance.statisticsGet(from, opts, (error, data, response) => {
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
 **from** | **Date**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | 
 **to** | **Date**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 

### Return type

[**LogStatusSummary**](LogStatusSummary.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

