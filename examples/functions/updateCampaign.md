# Update Campaign

This guide will walk you through steps to update an existing campaign on your account.

*Required Access Level: ModifyCampaigns*

## What's a campaign?
When using Elastic Email, when you send an email to any group of contacts we call that a "campaign".

## Preparation
It's NodeJS code, so make sure you have it installed or download it here: https://nodejs.org/en/download/

Create a new JavaScript file `snippet.js` and open it in editor of your preference eg. Visual Studio Code (https://code.visualstudio.com/)

## Let's dig into the code

Put the below code to your file.

Load library using below line:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');
```

Get client instance:

```javascript
const client = ElasticEmail.ApiClient.instance;
```

Generate and use your API key (remember to check a required access level): 

```javascript
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";
```

Create an instance of CampaignsApi that will be used to delete a campaign.

```javascript
const campaignsApi = new ElasticEmail.CampaignsApi()
```


Create a whole campaign object that you want to put in place of a current version:
- Name: defines campaign name by which you can identify it later
- Recipients: define your audience
- Conent: define your message details
- Status: define status in which campaign should be created

Send will be triggered immediately or postponed, depending on given options. 
Because we define `Status` as `Draft`, so in this case it will be postponed and campaign will be added to drafts.

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/campaignsByNamePut


```javascript
const campaign = {
    Name: 'hello campaign updated',
    Recipients: {
        ListNames: ["my list name"],
        SegmentNames: null,
    },
    Content: [{
        From: 'myemail@domain.com',
        ReplyTo: 'myemail@domain.com',
        TemplateName: "hello_template",
        Subject: 'Thanks for Subscribing'
    }],
    Status: "Draft"
};
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success message and details from the updated version.

```javascript
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Campaign name', data.Name);
        console.log('Campaign status', data.Status);
    }
};
```

And finally, call `campaignsByNamePut` method from the API to update a campaign: 

```javascript
campaignsApi.campaignsByNamePut(campaignName, campaign, callback);
```


## The whole code to copy and paste:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

const campaignsApi = new ElasticEmail.CampaignsApi()
const campaignName = "hello campaign";

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Campaign deleted.');
    }
};
campaignsApi.campaignsByNameDelete(campaignName, callback);
```

## Run the code
```
node snippet.js
```
