# ElasticEmail.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookID** | **String** | Public webhook ID | [optional] 
**name** | **String** | Filename | [optional] 
**dateCreated** | **Date** | Creation date. | [optional] 
**dateUpdated** | **Date** | Last change date | [optional] 
**URL** | **String** | URL of notification. | [optional] 
**notifyOncePerEmail** | **Boolean** |  | [optional] 
**notificationForSent** | **Boolean** |  | [optional] 
**notificationForOpened** | **Boolean** |  | [optional] 
**notificationForClicked** | **Boolean** |  | [optional] 
**notificationForUnsubscribed** | **Boolean** |  | [optional] 
**notificationForAbuseReport** | **Boolean** |  | [optional] 
**notificationForError** | **Boolean** |  | [optional] 
**isEnabled** | **Boolean** |  | [optional] 
**signingEnabled** | **Boolean** | Requests carry an HMAC-SHA256 signature. Chosen when the webhook is created and can&#39;t be changed. | [optional] 
**deliveryMethod** | [**WebhookDeliveryMethod**](WebhookDeliveryMethod.md) |  | [optional] 
**signingSecret** | **String** | Signing secret - returned only once, when a webhook is created with signing or its secret is rotated. Store it safely. | [optional] 


