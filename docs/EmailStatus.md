# ElasticEmail.EmailStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **String** | Email address this email was sent from. | [optional] 
**to** | **String** | Email address this email was sent to. | [optional] 
**date** | **Date** | Date the email was submitted. | [optional] 
**status** | [**LogJobStatus**](LogJobStatus.md) |  | [optional] 
**statusName** | **String** | Name of email&#39;s status | [optional] 
**statusChangeDate** | **Date** | Date of last status change. | [optional] 
**dateSent** | **Date** | Date when the email was sent | [optional] 
**dateOpened** | **Date** | Date when the email changed the status to &#39;opened&#39; | [optional] 
**dateClicked** | **Date** | Date when the email changed the status to &#39;clicked&#39; | [optional] 
**errorMessage** | **String** | Detailed error or bounced message. | [optional] 
**transactionID** | **String** | ID number of transaction | [optional] 
**envelopeFrom** | **String** | Envelope from address | [optional] 
**errorCategory** | [**MessageCategoryEnum**](MessageCategoryEnum.md) |  | [optional] 


