# ElasticEmail.ContactsApi

All URIs are relative to *https://api.elasticemail.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactsByEmailDelete**](ContactsApi.md#contactsByEmailDelete) | **DELETE** /contacts/{email} | Delete Contact
[**contactsByEmailGet**](ContactsApi.md#contactsByEmailGet) | **GET** /contacts/{email} | Load Contact
[**contactsByEmailHistoryGet**](ContactsApi.md#contactsByEmailHistoryGet) | **GET** /contacts/{email}/history | Load History
[**contactsByEmailPut**](ContactsApi.md#contactsByEmailPut) | **PUT** /contacts/{email} | Update Contact
[**contactsDeletePost**](ContactsApi.md#contactsDeletePost) | **POST** /contacts/delete | Delete Contacts Bulk
[**contactsExportByIdStatusGet**](ContactsApi.md#contactsExportByIdStatusGet) | **GET** /contacts/export/{id}/status | Check Export Status
[**contactsExportPost**](ContactsApi.md#contactsExportPost) | **POST** /contacts/export | Export Contacts
[**contactsGet**](ContactsApi.md#contactsGet) | **GET** /contacts | Load Contacts
[**contactsImportPost**](ContactsApi.md#contactsImportPost) | **POST** /contacts/import | Upload Contacts
[**contactsPost**](ContactsApi.md#contactsPost) | **POST** /contacts | Add Contact



## contactsByEmailDelete

> contactsByEmailDelete(email)

Delete Contact

Deletes the provided contact. Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ContactsApi();
let email = mail@example.com; // String | Proper email address.
apiInstance.contactsByEmailDelete(email, (error, data, response) => {
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
 **email** | **String**| Proper email address. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## contactsByEmailGet

> Contact contactsByEmailGet(email)

Load Contact

Load detailed contact information for specified email. Required Access Level: ViewContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ContactsApi();
let email = mail@example.com; // String | Proper email address.
apiInstance.contactsByEmailGet(email, (error, data, response) => {
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
 **email** | **String**| Proper email address. | 

### Return type

[**Contact**](Contact.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsByEmailHistoryGet

> [ContactHistory] contactsByEmailHistoryGet(email, opts)

Load History

Returns detailed history of specified Contact. Required Access Level: ViewContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ContactsApi();
let email = mail@example.com; // String | Proper email address.
let opts = {
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.contactsByEmailHistoryGet(email, opts, (error, data, response) => {
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
 **email** | **String**| Proper email address. | 
 **limit** | **Number**| Maximum number of returned items. | [optional] 
 **offset** | **Number**| How many items should be returned ahead. | [optional] 

### Return type

[**[ContactHistory]**](ContactHistory.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsByEmailPut

> Contact contactsByEmailPut(email, contactUpdatePayload)

Update Contact

Update selected contact. Omitted contact&#39;s fields will not be changed. Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ContactsApi();
let email = mail@example.com; // String | Proper email address.
let contactUpdatePayload = new ElasticEmail.ContactUpdatePayload(); // ContactUpdatePayload | 
apiInstance.contactsByEmailPut(email, contactUpdatePayload, (error, data, response) => {
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
 **email** | **String**| Proper email address. | 
 **contactUpdatePayload** | [**ContactUpdatePayload**](ContactUpdatePayload.md)|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## contactsDeletePost

> contactsDeletePost(emailsPayload)

Delete Contacts Bulk

Deletes provided contacts in bulk. Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ContactsApi();
let emailsPayload = new ElasticEmail.EmailsPayload(); // EmailsPayload | Provide either rule or a list of emails, not both.
apiInstance.contactsDeletePost(emailsPayload, (error, data, response) => {
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
 **emailsPayload** | [**EmailsPayload**](EmailsPayload.md)| Provide either rule or a list of emails, not both. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## contactsExportByIdStatusGet

> ExportStatus contactsExportByIdStatusGet(id)

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

let apiInstance = new ElasticEmail.ContactsApi();
let id = E33EBA7A-C20D-4D3D-8F2F-5EEF42F58E6F; // String | ID of the exported file
apiInstance.contactsExportByIdStatusGet(id, (error, data, response) => {
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


## contactsExportPost

> ExportLink contactsExportPost(opts)

Export Contacts

Request an Export of specified Contacts. Required Access Level: Export

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ContactsApi();
let opts = {
  'fileFormat': new ElasticEmail.ExportFileFormats(), // ExportFileFormats | Format of the exported file
  'rule': Status%20=%20Engaged, // String | Query used for filtering.
  'emails': mail@contact.com,mail1@contact.com,mail2@contact.com, // [String] | Comma delimited list of contact emails
  'compressionFormat': new ElasticEmail.CompressionFormat(), // CompressionFormat | FileResponse compression format. None or Zip.
  'fileName': filename.txt // String | Name of your file including extension.
};
apiInstance.contactsExportPost(opts, (error, data, response) => {
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
 **fileFormat** | [**ExportFileFormats**](.md)| Format of the exported file | [optional] 
 **rule** | **String**| Query used for filtering. | [optional] 
 **emails** | [**[String]**](String.md)| Comma delimited list of contact emails | [optional] 
 **compressionFormat** | [**CompressionFormat**](.md)| FileResponse compression format. None or Zip. | [optional] 
 **fileName** | **String**| Name of your file including extension. | [optional] 

### Return type

[**ExportLink**](ExportLink.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsGet

> [Contact] contactsGet(opts)

Load Contacts

Returns a list of contacts. Required Access Level: ViewContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ContactsApi();
let opts = {
  'limit': 100, // Number | Maximum number of returned items.
  'offset': 20 // Number | How many items should be returned ahead.
};
apiInstance.contactsGet(opts, (error, data, response) => {
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

[**[Contact]**](Contact.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsImportPost

> contactsImportPost(opts)

Upload Contacts

Upload contacts from a file. Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ContactsApi();
let opts = {
  'listName': "listName_example", // String | Name of an existing list to add these contacts to
  'encodingName': "encodingName_example", // String | In what encoding the file is uploaded
  'file': "/path/to/file" // File | 
};
apiInstance.contactsImportPost(opts, (error, data, response) => {
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
 **listName** | **String**| Name of an existing list to add these contacts to | [optional] 
 **encodingName** | **String**| In what encoding the file is uploaded | [optional] 
 **file** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## contactsPost

> [Contact] contactsPost(contactPayload, opts)

Add Contact

Add new Contacts to your Lists. Up to 1000 can be added (for more please refer to the import request). Required Access Level: ModifyContacts

### Example

```javascript
import ElasticEmail from '@elasticemail/elasticemail-client';
let defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

let apiInstance = new ElasticEmail.ContactsApi();
let contactPayload = [new ElasticEmail.ContactPayload()]; // [ContactPayload] | 
let opts = {
  'listnames': ["null"] // [String] | Names of lists to which the uploaded contacts should be added to
};
apiInstance.contactsPost(contactPayload, opts, (error, data, response) => {
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
 **contactPayload** | [**[ContactPayload]**](ContactPayload.md)|  | 
 **listnames** | [**[String]**](String.md)| Names of lists to which the uploaded contacts should be added to | [optional] 

### Return type

[**[Contact]**](Contact.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

