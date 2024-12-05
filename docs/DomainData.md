# ElasticEmail.DomainData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validationLog** | **String** | Domain validation results - when domain has been running through validation process | [optional] 
**domain** | **String** | Name of selected domain. | [optional] 
**defaultDomain** | **Boolean** | True, if domain is used as default. Otherwise, false, | [optional] 
**spf** | **Boolean** | True, if SPF record is verified | [optional] 
**dkim** | **Boolean** | True, if DKIM record is verified | [optional] 
**MX** | **Boolean** | True, if MX record is verified | [optional] 
**DMARC** | **Boolean** |  | [optional] 
**isRewriteDomainValid** | **Boolean** | True, if tracking CNAME record is verified | [optional] 
**verify** | **Boolean** | True, if DKIM, SPF, or tracking are still to be verified | [optional] 
**type** | [**TrackingType**](TrackingType.md) |  | [optional] 
**trackingStatus** | [**TrackingValidationStatus**](TrackingValidationStatus.md) |  | [optional] 
**certificateStatus** | [**CertificateValidationStatus**](CertificateValidationStatus.md) |  | [optional] 
**certificateValidationError** | **String** |  | [optional] 
**trackingTypeUserRequest** | [**TrackingType**](TrackingType.md) |  | [optional] 
**VERP** | **Boolean** |  | [optional] 
**customBouncesDomain** | **String** |  | [optional] 
**isCustomBouncesDomainDefault** | **Boolean** |  | [optional] 
**isMarkedForDeletion** | **Boolean** |  | [optional] 
**ownership** | [**DomainOwner**](DomainOwner.md) |  | [optional] 


