# ElasticEmail.WebhookCreatePayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Filename | 
**URL** | **String** | URL of notification. | 
**notifyOncePerEmail** | **Boolean** |  | [optional] 
**notificationForSent** | **Boolean** |  | [optional] 
**notificationForOpened** | **Boolean** |  | [optional] 
**notificationForClicked** | **Boolean** |  | [optional] 
**notificationForUnsubscribed** | **Boolean** |  | [optional] 
**notificationForAbuseReport** | **Boolean** |  | [optional] 
**notificationForError** | **Boolean** |  | [optional] 
**enableSigning** | **Boolean** | Sign every request with HMAC-SHA256. Can be set only when the webhook is created. Default: false. | [optional] 
**deliveryMethod** | [**WebhookDeliveryMethod**](WebhookDeliveryMethod.md) |  | [optional] 


