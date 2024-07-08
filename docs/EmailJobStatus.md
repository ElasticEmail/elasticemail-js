# ElasticEmail.EmailJobStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **String** | ID number of your attachment | [optional] 
**status** | **String** | Name of status: submitted, complete, in_progress | [optional] 
**recipientsCount** | **Number** |  | [optional] 
**failed** | [**[EmailJobFailedStatus]**](EmailJobFailedStatus.md) |  | [optional] 
**failedCount** | **Number** | Total emails failed. | [optional] 
**sent** | **[String]** |  | [optional] 
**sentCount** | **Number** | Total emails sent. | [optional] 
**delivered** | **[String]** | Number of delivered messages | [optional] 
**deliveredCount** | **Number** |  | [optional] 
**pending** | **[String]** |  | [optional] 
**pendingCount** | **Number** |  | [optional] 
**opened** | **[String]** | Number of opened messages | [optional] 
**openedCount** | **Number** | Total emails opened. | [optional] 
**clicked** | **[String]** | Number of clicked messages | [optional] 
**clickedCount** | **Number** | Total emails clicked | [optional] 
**unsubscribed** | **[String]** | Number of unsubscribed messages | [optional] 
**unsubscribedCount** | **Number** | Total emails unsubscribed | [optional] 
**abuseReports** | **[String]** |  | [optional] 
**abuseReportsCount** | **Number** |  | [optional] 
**messageIDs** | **[String]** | List of all MessageIDs for this job. | [optional] 


