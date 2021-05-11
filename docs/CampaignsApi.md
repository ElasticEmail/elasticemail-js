# ElasticEmail.CampaignsApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**campaignsByNameDelete**](CampaignsApi.md#campaignsByNameDelete) | **DELETE** /campaigns/{name} | Delete Campaign
[**campaignsByNameGet**](CampaignsApi.md#campaignsByNameGet) | **GET** /campaigns/{name} | Load Campaign
[**campaignsByNamePut**](CampaignsApi.md#campaignsByNamePut) | **PUT** /campaigns/{name} | Update Campaign
[**campaignsGet**](CampaignsApi.md#campaignsGet) | **GET** /campaigns | Load Campaigns
[**campaignsPost**](CampaignsApi.md#campaignsPost) | **POST** /campaigns | Add Campaign



## campaignsByNameDelete

> campaignsByNameDelete(name)

Delete Campaign

Delete the specific campaign.  This does not cancel in progress email, see Cancel In Progress. Required Access Level: ModifyCampaigns

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.CampaignsApi();
let name = "name_example"; // String | Name of Campaign to delete
apiInstance.campaignsByNameDelete(name, (error, data, response) => {
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
 **name** | **String**| Name of Campaign to delete | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## campaignsByNameGet

> Campaign campaignsByNameGet(name)

Load Campaign

Returns the specified campaign details. Required Access Level: ViewCampaigns

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.CampaignsApi();
let name = "name_example"; // String | Name of Campaign to get
apiInstance.campaignsByNameGet(name, (error, data, response) => {
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
 **name** | **String**| Name of Campaign to get | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## campaignsByNamePut

> Campaign campaignsByNamePut(name, campaign)

Update Campaign

Updates a previously added campaign.  Only Active and Paused campaigns can be updated. Required Access Level: ModifyCampaigns

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.CampaignsApi();
let name = "name_example"; // String | Name of Campaign to update
let campaign = new ElasticEmail.Campaign(); // Campaign | JSON representation of a campaign
apiInstance.campaignsByNamePut(name, campaign, (error, data, response) => {
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
 **name** | **String**| Name of Campaign to update | 
 **campaign** | [**Campaign**](Campaign.md)| JSON representation of a campaign | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## campaignsGet

> [Campaign] campaignsGet(opts)

Load Campaigns

Returns a list all of your campaigns. Limited to 1000 results. Required Access Level: ViewCampaigns

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.CampaignsApi();
let opts = {
  'search': "search_example", // String | Text fragment used for searching in Campaign name (using the 'contains' rule)
  'offset': 20, // Number | How many items should be returned ahead.
  'limit': 100 // Number | Maximum number of returned items.
};
apiInstance.campaignsGet(opts, (error, data, response) => {
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
 **search** | **String**| Text fragment used for searching in Campaign name (using the &#39;contains&#39; rule) | [optional] 
 **offset** | **Number**| How many items should be returned ahead. | [optional] 
 **limit** | **Number**| Maximum number of returned items. | [optional] 

### Return type

[**[Campaign]**](Campaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## campaignsPost

> Campaign campaignsPost(campaign)

Add Campaign

Add a campaign for processing. Required Access Level: ModifyCampaigns

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.CampaignsApi();
let campaign = new ElasticEmail.Campaign(); // Campaign | JSON representation of a campaign
apiInstance.campaignsPost(campaign, (error, data, response) => {
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
 **campaign** | [**Campaign**](Campaign.md)| JSON representation of a campaign | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

