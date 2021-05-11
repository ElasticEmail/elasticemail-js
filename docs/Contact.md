# ElasticEmail.Contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Proper email address. | [optional] 
**status** | [**ContactStatus**](ContactStatus.md) | Status of the given resource | [optional] 
**firstName** | **String** | First name. | [optional] 
**lastName** | **String** | Last name. | [optional] 
**customFields** | **{String: String}** | A key-value collection of custom contact fields which can be used in the system. | [optional] 
**consent** | [**ConsentData**](ConsentData.md) |  | [optional] 
**source** | [**ContactSource**](ContactSource.md) | From where was this contact added | [optional] 
**dateAdded** | **Date** | Date of creation in YYYY-MM-DDThh:ii:ss format | [optional] 
**dateUpdated** | **Date** | Last change date | [optional] 
**statusChangeDate** | **Date** | Date of last status change. | [optional] 
**activity** | [**ContactActivity**](ContactActivity.md) | Contact&#39;s email statistics and activity | [optional] 


