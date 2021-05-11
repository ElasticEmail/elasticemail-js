# ElasticEmail.ApiKeyPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the ApiKey for ease of reference. | [optional] 
**accessLevel** | [**[AccessLevel]**](AccessLevel.md) | Access level or permission to be assigned to this ApiKey. | [optional] 
**expires** | **Date** | Date this ApiKey expires. | [optional] 
**restrictAccessToIPRange** | **[String]** | Which IPs can use this ApiKey | [optional] 
**subaccount** | **String** | Email of the subaccount for which this ApiKey should be created | [optional] 


